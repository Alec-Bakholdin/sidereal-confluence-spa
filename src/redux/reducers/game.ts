import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameDto from "assets/dto/GameDto";
import UserDto from "assets/dto/UserDto";
import { signIn, signOut, signUp, testAuth } from "./auth";
import { RootState } from "../store";
import { templateAsyncThunk } from "../utils";
import api from "api";

export const createGame = templateAsyncThunk("/game/create", api.game.create);
export const joinGame = templateAsyncThunk("/game/join", api.game.join);
export const destroyGame = templateAsyncThunk(
  "/game/destroy",
  api.game.destroy
);

interface GameSliceState {
  loading: boolean;
  game?: GameDto;
}

const gameSlice = createSlice({
  name: "game",
  initialState: { loading: false } as GameSliceState,
  reducers: {},
  extraReducers: (builder) => {
    const setGameFromUser = (
      state: GameSliceState,
      action: PayloadAction<UserDto>
    ) => {
      if (action.payload?.game) {
        state.game = action.payload.game;
      }
    };
    const setGame = (state: GameSliceState, action: PayloadAction<GameDto>) => {
      state.loading = false;
      state.game = action.payload;
    };
    const setLoading =
      (newLoadingStatus: boolean) => (state: GameSliceState) => {
        state.loading = newLoadingStatus;
      };

    const setGameNull = (state: GameSliceState) => {
      state.loading = false;
      state.game = undefined;
    };
    builder
      .addCase(signIn.fulfilled, setGameFromUser)
      .addCase(signUp.fulfilled, setGameFromUser)
      .addCase(testAuth.fulfilled, setGameFromUser)

      .addCase(createGame.fulfilled, setGame)
      .addCase(createGame.pending, setLoading(true))
      .addCase(createGame.rejected, setLoading(false))

      .addCase(joinGame.fulfilled, setGame)
      .addCase(joinGame.pending, setLoading(true))
      .addCase(joinGame.rejected, setLoading(false))

      .addCase(signOut.fulfilled, setGameNull)
      .addCase(destroyGame.fulfilled, setGameNull);
  },
});

export const selectGame = (state: RootState) => state.game.game;

export default gameSlice.reducer;
