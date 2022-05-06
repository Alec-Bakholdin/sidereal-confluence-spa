import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalsState {
  joinGameModal: boolean;
  playerDetailsModal: { playerId: string; show: boolean };
}

const initialState: modalsState = {
  joinGameModal: false,
  playerDetailsModal: { playerId: "", show: false },
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
  },
});

export const {
  openJoinGameModal,
  closeJoinGameModal,
  openPlayerDetailsModal,
  closePlayerDetailsModal,
} = modalsSlice.actions;
export const selectJoinGameModal = (state: any) => state.modals.joinGameModal;
export const selectPlayerDetailsModal = (state: any) =>
  state.modals.playerDetailsModal;
export default modalsSlice.reducer;
