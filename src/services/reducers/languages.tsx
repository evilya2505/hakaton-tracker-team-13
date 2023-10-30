import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TLanguage } from "../../utils/types";

export interface TLanguageListState {
  languages: TLanguage[];
  request: boolean;
  requestFailed: boolean;
}

export const initialState: TLanguageListState = {
  languages: [],
  request: false,
  requestFailed: false,
};

const languagesSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    getLanguagesRequest(state: TLanguageListState) {
      state.request = true;
      state.requestFailed = false;
    },
    getLanguagesSuccess(state: TLanguageListState, action: PayloadAction<TLanguage[]>) {
      state.languages = action.payload;
      state.request = false;
      state.requestFailed = false;
    },
    getLanguagesFailed(state: TLanguageListState) {
      state.request = false;
      state.requestFailed = true;
    },
  },
});
export const { getLanguagesRequest, getLanguagesFailed, getLanguagesSuccess } =
languagesSlice.actions;

export default languagesSlice.reducer;
