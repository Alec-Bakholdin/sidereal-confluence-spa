import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalsState {
  joinGameModal: boolean;
  playerDetailsModal: { playerId: string; show: boolean };
  updateResourcesModal: boolean;
}

const initialState: modalsState = {
  joinGameModal: false,
  playerDetailsModal: { playerId: "", show: false },
  updateResourcesModal: false,
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
  },
});

export const {
  openJoinGameModal,
  closeJoinGameModal,
  openPlayerDetailsModal,
  closePlayerDetailsModal,
  openUpdateResourcesModal,
  closeUpdateResourcesModal,
} = modalsSlice.actions;
export const selectJoinGameModal = (state: any) => state.modals.joinGameModal;
export const selectPlayerDetailsModal = (state: any) =>
  state.modals.playerDetailsModal;
export const selectUpdateResourcesModal = (state: any) =>
  state.modals.updateResourcesModal;
export default modalsSlice.reducer;
