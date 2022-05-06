import { Card } from "assets/types/Cards";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "api";
import { RootState } from "../store";
import { ErrorResponse, transformApiError } from "./errors";

const initialState: {
  cards: { [id: string]: Card };
} = {
  cards: {},
};

export const fetchCards = createAsyncThunk<
  { [id: string]: Card },
  void,
  { rejectValue: ErrorResponse }
>("/cards/fetch", async (_, { rejectWithValue }) => {
  try {
    const response = await api.allCards();
    return response.data;
  } catch (e) {
    return rejectWithValue(transformApiError(e));
  }
});

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    }),
});

export const selectCards = (state: RootState) => state.cards.cards;
export default cardsSlice.reducer;
