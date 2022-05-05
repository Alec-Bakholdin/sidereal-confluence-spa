import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import GameState from "assets/types/GameState";
import api from "api";
import { ErrorResponse } from "./errors";
import { AxiosError } from "axios";

export interface JoinGamePayload {
  playerName: string;
}
export interface JoinGameResponse {
  playerId: string;
  gameState: GameState;
}

interface GameStateState {
  playerId?: string | undefined;
  gameState: GameState;
}

const initialState: GameStateState = {
  gameState: {
    turn: 1,
    phase: "Trade",
    players: {},
  },
};

export const newGame = createAsyncThunk("/gameState/newGame", async () => {
  const response = await api.newGame();
  return response.data;
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
    let er: AxiosError<ErrorResponse> = e as AxiosError<ErrorResponse>;
    if (!er.response) {
      throw e;
    }
    return rejectWithValue(er.response.data);
  }
});

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(joinGame.fulfilled, (state, action) => {
      state.playerId = action.payload.playerId;
      state.gameState = action.payload.gameState;
      console.log(`Successfully joined game as player ${state.playerId}`);
      console.log("gameState: ", state.gameState);
    });
  },
});

export const selectGameState = (state: RootState) => state.gameState.gameState;
export const selectPlayerId = (state: RootState) => state.gameState.playerId;

export default gameStateSlice.reducer;
