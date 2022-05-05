import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { joinGame } from "./gameState";
import { RootState } from "../store";

export interface ErrorResponse {
  httpStatusCode: number;
  error: string;
}

interface ErrorsState {
  errors: string[];
}

const initialState: ErrorsState = {
  errors: [],
};

const handleError = (
  state: ErrorsState,
  action: PayloadAction<ErrorResponse | undefined>
) => {
  if (action.payload) {
    state.errors.push(action.payload.error);
    console.error(action.payload.error);
  } else {
    state.errors.push("Unknown error");
    console.error("Unknown error");
  }
};

export const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    resetErrors: (state) => {
      state.errors = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(joinGame.rejected, (state, action) => {
      console.log("Handling error");
      handleError(state, action);
    });
  },
});

export const errorsSelector = (state: RootState) => state.errors.errors;

export const { resetErrors } = errorsSlice.actions;

export default errorsSlice.reducer;
