import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserDto from "../../assets/dto/UserDto";
import { signIn, signOut, signUp, testAuth } from "./auth";
import { RootState } from "../store";

interface UserSliceState {
  user?: UserDto;
}

const userSlice = createSlice({
  name: "user",
  initialState: {} as UserSliceState,
  reducers: {},
  extraReducers: (builder) => {
    const updateUser = (
      state: UserSliceState,
      action: PayloadAction<UserDto>
    ) => {
      state.user = action.payload;
    };
    builder
      .addCase(signIn.fulfilled, updateUser)
      .addCase(signUp.fulfilled, updateUser)
      .addCase(testAuth.fulfilled, updateUser)
      .addCase(signOut.fulfilled, (state) => {
        state.user = undefined;
      });
  },
});

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
