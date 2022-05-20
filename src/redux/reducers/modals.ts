import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Resources from "../../assets/types/Resources";
import { RootState } from "../store";

interface modalsState {
  joinGameModal: boolean;
  playerDetailsModal: { playerId: string; show: boolean };
  updateResourcesModal: {
    resources: Resources;
    isDonation: boolean;
    show: boolean;
  };
  cardActionsModal: { cardId: string; show: boolean };
}

const initialState: modalsState = {
  joinGameModal: false,
  playerDetailsModal: { playerId: "", show: false },
  updateResourcesModal: {
    resources: {},
    isDonation: false,
    show: false,
  },
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
    openUpdateResourcesModal: (
      state,
      action: PayloadAction<{ resources: Resources; isDonation?: boolean }>
    ) => {
      if (!action.payload) {
        return;
      }
      state.updateResourcesModal = {
        resources: action.payload.resources,
        isDonation: action.payload.isDonation ?? false,
        show: true,
      };
    },
    closeUpdateResourcesModal: (state) => {
      state.updateResourcesModal.show = false;
      state.updateResourcesModal.resources = {};
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
export const selectJoinGameModal = (state: RootState) =>
  state.modals.joinGameModal;
export const selectPlayerDetailsModal = (state: RootState) =>
  state.modals.playerDetailsModal;
export const selectUpdateResourcesModal = (state: RootState) =>
  state.modals.updateResourcesModal;
export const selectCardActionsModal = (state: RootState) =>
  state.modals.cardActionsModal;
export default modalsSlice.reducer;
