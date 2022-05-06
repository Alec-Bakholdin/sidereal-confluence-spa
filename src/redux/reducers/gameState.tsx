import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import GameState from "assets/types/GameState";
import api from "api";
import { ErrorResponse, transformApiError } from "./errors";
import Player from "../../assets/types/Player";
import Resources from "../../assets/types/Resources";
import { UpdateGameStateServerMessage } from "../../assets/types/SocketTopics";

export interface JoinGamePayload {
  playerName: string;
}
export interface JoinGameResponse {
  playerId: string;
  playerName: string;
  gameState: GameState;
}

export interface RejoinGamePayload {
  playerId: string;
  playerName: string;
}

interface PlayerInformation {
  playerId: string;
  playerName: string;
}

interface GameStateState {
  playerId?: string | undefined;
  playerName?: string | undefined;
  isFresh: boolean;
  gameState: GameState;
}

const initialState: GameStateState = {
  isFresh: false,
  gameState: {
    turn: 1,
    phase: "Trade",
    gameOver: false,
    gameStarted: false,

    confluenceList: [],
    availableColonies: [],
    availableResearchTeams: [],
    colonyBidTrack: [],
    researchTeamBidTrack: [],

    players: {},
  },
};

export const newGame = createAsyncThunk<
  GameState,
  void,
  { rejectValue: ErrorResponse }
>("/gameState/newGame", async (_, { rejectWithValue }) => {
  try {
    const response = await api.newGame();
    return response.data;
  } catch (e) {
    return rejectWithValue(transformApiError(e));
  }
});

export const joinGame = createAsyncThunk<
  JoinGameResponse, // response type
  JoinGamePayload, // payload type
  { rejectValue: ErrorResponse } // error type
>("/gameState/joinGame", async (payload, { rejectWithValue }) => {
  try {
    const response = await api.joinGame(payload);
    return response.data;
  } catch (e) {
    return rejectWithValue(transformApiError(e));
  }
});

export const rejoinGame = createAsyncThunk<
  JoinGameResponse,
  RejoinGamePayload,
  { rejectValue: ErrorResponse }
>("/gameState/rejoinGame", async (payload, { rejectWithValue }) => {
  try {
    const response = await api.rejoinGame(payload);
    return response.data;
  } catch (e) {
    return rejectWithValue(transformApiError(e));
  }
});

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setPlayerInformation: (state, action: PayloadAction<PlayerInformation>) => {
      state.playerId = action.payload.playerId;
      state.playerName = action.payload.playerName;
    },
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.gameState.players[action.payload.id] = action.payload;
    },
    updatePlayerResources: (
      state,
      action: PayloadAction<{ playerId: string; resources: Resources }>
    ) => {
      if (action.payload) {
        const { playerId, resources } = action.payload;
        if (state.gameState.players[playerId]) {
          state.gameState.players[playerId].resources = resources;
        }
      }
    },
    updateGameState: (
      state,
      action: PayloadAction<UpdateGameStateServerMessage>
    ) => {
      console.log(action.payload);
      if (action.payload) {
        state.gameState = { ...state.gameState, ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(joinGame.fulfilled, (state, action) => {
      state.playerId = action.payload.playerId;
      state.playerName = action.payload.playerName;
      state.gameState = action.payload.gameState;
      console.log(`Successfully joined game as player ${state.playerId}`);
      console.log("gameState: ", state.gameState);
    });
    builder.addCase(joinGame.pending, (state) => {
      state.isFresh = true;
    });
    builder.addCase(joinGame.rejected, (state) => {
      state.isFresh = false;
    });
    builder.addCase(rejoinGame.fulfilled, (state, action) => {
      state.playerId = action.payload.playerId;
      state.playerName = action.payload.playerName;
      state.gameState = action.payload.gameState;
      console.log(`Successfully rejoined game as player ${state.playerId}`);
      console.log("gameState: ", state.gameState);
    });
    builder.addCase(rejoinGame.pending, (state) => {
      state.isFresh = true;
    });
  },
});

export const selectGameState = (state: RootState) => state.gameState.gameState;
export const selectPlayerName = (state: RootState) =>
  state.gameState.playerName;
export const selectPlayerId = (state: RootState) => state.gameState.playerId;
export const selectFreshGameState = (state: RootState) =>
  state.gameState.isFresh;

export const {
  setPlayerInformation,
  addPlayer,
  updatePlayerResources,
  updateGameState,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
