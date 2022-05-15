import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./reducers/gameState";
import cardsReducer from "./reducers/cards";
import modalsReducer from "./reducers/modals";
import errorsReducer from "./reducers/errors";
import economyReducer from "./reducers/economy";
import biddingReducer from "./reducers/bidding";

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
    cards: cardsReducer,
    modals: modalsReducer,
    errors: errorsReducer,
    economy: economyReducer,
    bidding: biddingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
