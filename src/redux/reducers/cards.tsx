import { Card, Colony, ConverterCard, ResearchTeam } from "assets/types/Cards";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "api";
import { RootState } from "../store";
import { templateAsyncThunk } from "../utils";

const initialState: {
  cards: { [id: string]: Card };
} = {
  cards: {},
};
export const fetchCards = templateAsyncThunk("/cards/fetch", api.allCards);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    updateCard: (state, action: PayloadAction<Card>) => {
      if (!action.payload || !state.cards[action.payload.id]) {
        return;
      }
      const { id, type } = action.payload;
      if (type === "ResearchTeam") {
        state.cards[id] = action.payload as ResearchTeam;
      } else if (type === "Colony") {
        state.cards[id] = action.payload as Colony;
      } else if (type === "ConverterCard") {
        state.cards[id] = action.payload as ConverterCard;
      }
    },
    updateAllCards: (state, action: PayloadAction<{ [id: string]: Card }>) => {
      state.cards = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    }),
});

export const selectCards = (state: RootState) => state.cards.cards;
export const selectCard = (id: string) => (state: RootState) =>
  state.cards.cards[id];
export const { updateCard, updateAllCards } = cardsSlice.actions;
export default cardsSlice.reducer;
