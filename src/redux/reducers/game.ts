import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameDto from "assets/dto/GameDto";
import UserDto from "assets/dto/UserDto";
import { signIn, signOut, signUp, testAuth } from "./auth";
import { RootState } from "../store";

interface GameSliceState {
  game?: GameDto;
}

const gameSlice = createSlice({
  name: "game",
  initialState: {} as GameSliceState,
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
    builder
      .addCase(signIn.fulfilled, setGameFromUser)
      .addCase(signUp.fulfilled, setGameFromUser)
      .addCase(testAuth.fulfilled, setGameFromUser)
      .addCase(signOut.fulfilled, (state) => {
        state.game = undefined;
      });
  },
});

export const selectGame = (state: RootState) => state.game.game;

export default gameSlice.reducer;
