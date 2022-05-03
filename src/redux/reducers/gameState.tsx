import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GameState {
  value: number;
}

const initialState: GameState = {
  value: 0,
};

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  gameStateSlice.actions;
export const selectCount = (state: RootState) => state.gameState.value;

export default gameStateSlice.reducer;
