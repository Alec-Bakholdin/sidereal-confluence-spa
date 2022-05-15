import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import GameState from "assets/types/GameState";
import api from "api";
import { ErrorResponse, transformApiError } from "./errors";
import Player from "assets/types/Player";
import {
  AcquireCardServerMessage,
  RemoveActiveCardServerMessage,
  TransferCardServerMessage,
  UpdateGameStateServerMessage,
  UpdatePlayerResourcesServerMessage,
} from "assets/types/SocketTopics";
import { RaceName } from "../../assets/types/Race";

export interface JoinGamePayload {
  playerName: string;
  raceName: RaceName;
}
export interface JoinGameResponse {
  playerId: string;
  playerName: string;
  raceName: string;
  gameState: GameState;
}

export interface RejoinGamePayload {
  playerId: string;
  playerName: string;
  raceName: RaceName;
}

interface PlayerInformation {
  playerId: string;
  playerName: string;
  raceName: RaceName;
}

interface GameStateState {
  playerId?: string;
  playerName?: string;
  raceName?: RaceName;
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

    pendingResearches: [],

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
    console.log(response);
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
      state.raceName = action.payload.raceName;
    },
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.gameState.players[action.payload.id] = action.payload;
    },
    updatePlayerResources: (
      state,
      action: PayloadAction<UpdatePlayerResourcesServerMessage>
    ) => {
      if (action.payload) {
        const { playerId, resources, donations } = action.payload;
        if (state.gameState.players[playerId]) {
          state.gameState.players[playerId].resources = resources;
          state.gameState.players[playerId].donations = donations;
        }
      }
    },
    transferCard: (state, action: PayloadAction<TransferCardServerMessage>) => {
      if (action.payload) {
        const { currentOwnerPlayerId, newOwnerPlayerId, cardId } =
          action.payload;
        const currentOwner = state.gameState.players[currentOwnerPlayerId];
        const newOwner = state.gameState.players[newOwnerPlayerId];
        if (currentOwner && newOwner && currentOwner.cards.includes(cardId)) {
          newOwner.cards.push(cardId);
          currentOwner.cards = currentOwner.cards.filter(
            (card) => card !== cardId
          );
        }
      }
    },
    acquireCard: (state, action: PayloadAction<AcquireCardServerMessage>) => {
      if (
        !action.payload ||
        !state.gameState.players[action.payload.playerId]
      ) {
        return;
      }
      const { playerId, cardId } = action.payload;
      const player = state.gameState.players[playerId];
      player.inactiveCards = player.inactiveCards.filter(
        (card) => card !== cardId
      );
      if (!player.cards.includes(cardId)) {
        player.cards.push(cardId);
      }
    },
    removeActiveCard: (
      state,
      action: PayloadAction<RemoveActiveCardServerMessage>
    ) => {
      if (
        !action.payload ||
        !state.gameState.players[action.payload.playerId]
      ) {
        return;
      }
      const { playerId, cardId } = action.payload;
      const player = state.gameState.players[playerId];
      player.cards = player.cards.filter((card) => card !== cardId);
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
    updateGameStateWholesale: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(joinGame.fulfilled, (state, action) => {
      state.playerId = action.payload.playerId;
      state.playerName = action.payload.playerName;
      state.gameState = action.payload.gameState;
      state.raceName = action.payload.raceName as RaceName;
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
      state.raceName = action.payload.raceName as RaceName;
      console.log(`Successfully rejoined game as player ${state.playerId}`);
      console.log("gameState: ", state.gameState);
    });
    builder.addCase(rejoinGame.pending, (state) => {
      state.isFresh = true;
    });
  },
});

export const selectGameState = (state: RootState) => state.gameState.gameState;
export const selectPlayerById = (playerId?: string) => (state: RootState) =>
  state.gameState.gameState.players[playerId ?? ""] ?? {};
export const selectPlayerName = (state: RootState) =>
  state.gameState.playerName;
export const selectPlayerId = (state: RootState) => state.gameState.playerId;
export const selectFreshGameState = (state: RootState) =>
  state.gameState.isFresh;

export const {
  setPlayerInformation,
  addPlayer,
  updatePlayerResources,
  transferCard,
  acquireCard,
  removeActiveCard,
  updateGameState,
  updateGameStateWholesale,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
