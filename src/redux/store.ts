import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import errors from "./reducers/errors";
import modals from "./reducers/modals";

const store = configureStore({
  reducer: {
    errors,
    auth,
    modals,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
