import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./reducers/gameState";
import cardsReducer from "./reducers/cards";
import modalsReducer from "./reducers/modals";

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
    cards: cardsReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
