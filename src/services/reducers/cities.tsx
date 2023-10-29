import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCity } from "../../utils/types";

export interface TCityListState {
  cities: TCity[];
  request: boolean;
  requestFailed: boolean;
}

export const initialState: TCityListState = {
  cities: [],
  request: false,
  requestFailed: false,
};

const citiesSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    getCitiesRequest(state: TCityListState) {
      state.request = true;
      state.requestFailed = false;
    },
    getCitiesSuccess(state: TCityListState, action: PayloadAction<TCity[]>) {
      state.cities = action.payload;
      state.request = false;
      state.requestFailed = false;
    },
    getCitiesFailed(state: TCityListState) {
      state.request = false;
      state.requestFailed = true;
    },
  },
});
export const { getCitiesRequest, getCitiesSuccess, getCitiesFailed } =
  citiesSlice.actions;

export default citiesSlice.reducer;
