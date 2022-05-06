import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { joinGame, newGame, rejoinGame } from "./gameState";
import { RootState } from "../store";
import { AxiosError } from "axios";
import { fetchCards } from "./cards";

export interface ErrorResponse {
  httpStatusCode: number;
  error: string;
}

export function transformApiError(e: any): ErrorResponse {
  let err: AxiosError<ErrorResponse> = e;
  if (!err.response) {
    throw e;
  }
  return err.response.data;
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
      console.log("Handling joinGame error");
      handleError(state, action);
    });
    builder.addCase(newGame.rejected, (state, action) => {
      console.log("Handling newGame error");
      handleError(state, action);
    });
    builder.addCase(rejoinGame.rejected, (state, action) => {
      console.log("Handling rejoinGame error");
      handleError(state, action);
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      console.log("Handling fetchCards error");
      handleError(state, action);
    });
  },
});

export const errorsSelector = (state: RootState) => state.errors.errors;

export const { resetErrors } = errorsSlice.actions;

export default errorsSlice.reducer;
