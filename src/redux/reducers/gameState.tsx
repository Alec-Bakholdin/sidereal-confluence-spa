import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import GameState from "assets/types/GameState";
import api from "api";
import { ErrorResponse, transformApiError } from "./errors";

export interface JoinGamePayload {
  playerName: string;
}
export interface JoinGameResponse {
  playerId: string;
  playerName: string;
  gameState: GameState;
}

interface PlayerInformation {
  playerId: string;
  playerName: string;
}

interface GameStateState {
  playerId?: string | undefined;
  playerName?: string | undefined;
  gameState: GameState;
}

const initialState: GameStateState = {
  gameState: {
    turn: 1,
    phase: "Trade",
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

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setPlayerInformation: (state, action: PayloadAction<PlayerInformation>) => {
      state.playerId = action.payload.playerId;
      state.playerName = action.payload.playerName;
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
  },
});

export const selectGameState = (state: RootState) => state.gameState.gameState;
export const selectPlayerName = (state: RootState) =>
  state.gameState.playerName;
export const selectPlayerId = (state: RootState) => state.gameState.playerId;

export const { setPlayerInformation } = gameStateSlice.actions;

export default gameStateSlice.reducer;
