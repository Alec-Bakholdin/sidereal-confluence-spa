import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { joinGame } from "./gameState";

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(joinGame.rejected, (state, action) => {
      handleError(state, action);
    });
  },
});

export default errorsSlice.reducer;
