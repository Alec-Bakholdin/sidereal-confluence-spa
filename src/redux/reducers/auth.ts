import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { RootState } from "../store";
import { templateAsyncThunk } from "../utils";

export const signIn = templateAsyncThunk("signIn", api.signIn);
export const signUp = templateAsyncThunk("signUp", api.signUp);
export const signOut = templateAsyncThunk("signOut", api.signOut);
export const testAuth = templateAsyncThunk("testAuth", api.user);

interface initialStateType {
  loading: boolean;
  authenticated: boolean;
}

const initialState: initialStateType = {
  loading: true,
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const authPendingReducer = (state: initialStateType) => {
      state.loading = true;
    };
    const authFulfilledReducer = (state: initialStateType) => {
      state.loading = false;
      state.authenticated = true;
    };
    const authRejectedReducer = (state: initialStateType) => {
      state.loading = false;
      state.authenticated = false;
    };
    builder
      .addCase(signIn.pending, authPendingReducer)
      .addCase(signIn.fulfilled, authFulfilledReducer)
      .addCase(signIn.rejected, authRejectedReducer)

      .addCase(testAuth.pending, authPendingReducer)
      .addCase(testAuth.fulfilled, authFulfilledReducer)
      .addCase(testAuth.rejected, authRejectedReducer)

      .addCase(signUp.pending, authPendingReducer)
      .addCase(signUp.fulfilled, authFulfilledReducer)
      .addCase(signUp.rejected, authRejectedReducer)

      .addCase(signOut.pending, authPendingReducer)
      .addCase(signOut.fulfilled, (state) => {
        state.authenticated = false;
        state.loading = false;
      });
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
