import { createSlice } from "@reduxjs/toolkit";
import RaceDto from "assets/dto/RaceDto";
import { templateAsyncThunk } from "../utils";
import api from "api";
import { RootState } from "../store";

export const getRaces = templateAsyncThunk("/races/getAllRaces", api.races);

interface RacesSliceState {
  loading: boolean;
  races?: RaceDto[];
}

const racesSlice = createSlice({
  name: "races",
  initialState: { loading: true } as RacesSliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRaces.fulfilled, (state, action) => {
        state.races = action.payload;
        state.loading = false;
      })
      .addCase(getRaces.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRaces.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectRaces = (state: RootState) => state.races.races;

export default racesSlice.reducer;
