import { createAsyncThunk } from "@reduxjs/toolkit";
import ErrorDto, { axiosErrorToDto } from "../assets/dto/ErrorDto";
import { AxiosResponse } from "axios";

export function templateAsyncThunk<In, Out>(
  thunkName: string,
  apiFunction: (input: In) => Promise<AxiosResponse<Out>>
) {
  return createAsyncThunk<Out, In, { rejectValue: ErrorDto }>(
    thunkName,
    async (input, { rejectWithValue }) => {
      try {
        const response = await apiFunction(input);
        return response.data;
      } catch (e) {
        return rejectWithValue(axiosErrorToDto(e));
      }
    }
  );
}