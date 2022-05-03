import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./reducers/gameState";

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
