import { PlayerBid } from "../../assets/types/PlayerBid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RevealBidsServerMessage } from "../../assets/types/SocketTopics";
import { RootState } from "../store";

const initialState: { playerBids: PlayerBid[] } = {
  playerBids: [],
};

export const biddingSlice = createSlice({
  name: "bidding",
  initialState,
  reducers: {
    setBids: (state, action: PayloadAction<RevealBidsServerMessage>) => {
      if (action.payload) {
        state.playerBids = action.payload;
      }
    },
    clearBids: (state) => {
      state.playerBids = [];
    },
  },
});

export const selectBids = (state: RootState) => state.bidding.playerBids;
export const { setBids, clearBids } = biddingSlice.actions;
export default biddingSlice.reducer;
