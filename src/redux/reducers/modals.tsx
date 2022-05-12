import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalsState {
  joinGameModal: boolean;
  playerDetailsModal: { playerId: string; show: boolean };
  updateResourcesModal: boolean;
  cardActionsModal: { cardId: string; show: boolean };
}

const initialState: modalsState = {
  joinGameModal: false,
  playerDetailsModal: { playerId: "", show: false },
  updateResourcesModal: false,
  cardActionsModal: { cardId: "", show: false },
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openJoinGameModal: (state) => {
      state.joinGameModal = true;
    },
    closeJoinGameModal: (state) => {
      state.joinGameModal = false;
    },
    openPlayerDetailsModal: (state, action: PayloadAction<string>) => {
      state.playerDetailsModal.playerId = action.payload;
      state.playerDetailsModal.show = true;
    },
    closePlayerDetailsModal: (state) => {
      state.playerDetailsModal.show = false;
    },
    openUpdateResourcesModal: (state) => {
      state.updateResourcesModal = true;
    },
    closeUpdateResourcesModal: (state) => {
      state.updateResourcesModal = false;
    },
    openCardActionsModal: (state, action: PayloadAction<string>) => {
      state.cardActionsModal.cardId = action.payload;
      state.cardActionsModal.show = true;
    },
    closeCardActionsModal: (state) => {
      state.cardActionsModal.show = false;
    },
  },
});

export const {
  openJoinGameModal,
  closeJoinGameModal,
  openPlayerDetailsModal,
  closePlayerDetailsModal,
  openUpdateResourcesModal,
  closeUpdateResourcesModal,
  openCardActionsModal,
  closeCardActionsModal,
} = modalsSlice.actions;
export const selectJoinGameModal = (state: any) => state.modals.joinGameModal;
export const selectPlayerDetailsModal = (state: any) =>
  state.modals.playerDetailsModal;
export const selectUpdateResourcesModal = (state: any) =>
  state.modals.updateResourcesModal;
export const selectCardActionsModal = (state: any) =>
  state.modals.cardActionsModal;
export default modalsSlice.reducer;
