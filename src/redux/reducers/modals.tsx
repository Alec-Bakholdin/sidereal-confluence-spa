import { createSlice } from "@reduxjs/toolkit";

interface modalsState {
  joinGameModal: boolean;
}

const initialState: modalsState = {
  joinGameModal: false,
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
  },
});

export const { openJoinGameModal, closeJoinGameModal } = modalsSlice.actions;
export const selectJoinGameModal = (state: any) => state.modals.joinGameModal;
export default modalsSlice.reducer;
