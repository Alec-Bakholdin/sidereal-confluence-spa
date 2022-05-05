import { ConverterCard } from "assets/types/Cards";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "api";
import { RootState } from "../store";

const initialState: {
  cards: { [id: string]: ConverterCard };
  status: "idle" | "loading" | "failure" | "success";
} = {
  cards: {},
  status: "idle",
};

export const fetchCards = createAsyncThunk("/cards/fetch", async () => {
  const response = await api.allCards();
  return response.data;
});

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export const selectCards = (state: RootState) => state.cards.cards;
export default cardsSlice.reducer;
