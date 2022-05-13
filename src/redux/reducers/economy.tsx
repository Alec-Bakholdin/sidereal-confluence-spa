import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EconomyAction } from "assets/types/SocketTopics";
import { RootState } from "../store";

const initialState: {
  economyActions: EconomyAction[];
  economyActionsLookup: { [cardId: string]: number[] };
} = {
  economyActions: [],
  economyActionsLookup: {},
};

const economySlice = createSlice({
  name: "economy",
  initialState,
  reducers: {
    toggleEconomyAction: (state, action: PayloadAction<EconomyAction>) => {
      if (!action.payload) {
        return;
      }
      const { converterIndex, cardId } = action.payload;
      const activeIndices = state.economyActionsLookup[action.payload.cardId];

      if (!activeIndices) {
        // card does not have any active economy actions
        state.economyActionsLookup[cardId] = [converterIndex];
        state.economyActions.push(action.payload);
      } else if (!activeIndices.includes(converterIndex)) {
        // card doesn't include this particular converter in economy actions
        state.economyActionsLookup[cardId] = [...activeIndices, converterIndex];
        state.economyActions.push(action.payload);
      } else {
        // economy action exists and we need to remove it
        state.economyActionsLookup[cardId] = activeIndices.filter(
          (index) => index !== converterIndex
        );
        state.economyActions = state.economyActions.filter(
          (econAction) =>
            !(
              econAction.converterIndex === converterIndex &&
              econAction.cardId === cardId
            )
        );
      }
    },
  },
});

export const selectEconomyActions = (state: RootState) =>
  state.economy.economyActions;
export const selectEconomyActionsLookup = (state: RootState) =>
  state.economy.economyActionsLookup;
export const { toggleEconomyAction } = economySlice.actions;
export default economySlice.reducer;
