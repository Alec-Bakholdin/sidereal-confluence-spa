import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { signIn, signOut, signUp } from "./auth";
import ErrorDto from "assets/dto/ErrorDto";
import { createGame, destroyGame, joinGame } from "./game";
import { getRaces } from "./races";

interface ErrorsState {
  errors: string[];
}

const initialState: ErrorsState = {
  errors: [],
};

export const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    resetErrors: (state) => {
      state.errors = [];
    },
    addError: (state, action: PayloadAction<string>) => {
      state.errors.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    const handleError = (
      state: ErrorsState,
      action: PayloadAction<ErrorDto | undefined>
    ) => {
      state.errors.push(action.payload?.message ?? "Unknown Error");
    };
    builder
      .addCase(signIn.rejected, handleError)
      .addCase(signUp.rejected, handleError)
      .addCase(signOut.rejected, handleError)

      .addCase(createGame.rejected, handleError)
      .addCase(joinGame.rejected, handleError)
      .addCase(destroyGame.rejected, handleError)

      .addCase(getRaces.rejected, handleError);
  },
});

export const errorsSelector = (state: RootState) => state.errors.errors;

export const { resetErrors, addError } = errorsSlice.actions;

export default errorsSlice.reducer;
