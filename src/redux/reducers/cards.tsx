import { ConverterCard } from "assets/types/Cards";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "api";
import { RootState } from "../store";

interface CardsState {
  cards: { [id: string]: ConverterCard };
  status: "idle" | "loading" | "failure" | "success";
}

const initialState: CardsState = {
  cards: {},
  status: "idle",
};

export const fetchCards = createAsyncThunk("/cards/fetch", async () => {
  const response = await api.allCards();
  console.log(response.data);
  return response.data;
});

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export const selectCards = (state: RootState) => state.cards.cards;
export default cardsSlice.reducer;
