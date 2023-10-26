import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddVacancyFormValues } from "../../utils/types";

export interface TVacaniesListState {
  currentVacancy: AddVacancyFormValues | null;
  isPreviewModalVisible: boolean;
}

export const initialState: TVacaniesListState = {
    currentVacancy: null,
    isPreviewModalVisible: false,
};

const vacanciesSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentVacancyData(state: TVacaniesListState, action: PayloadAction<AddVacancyFormValues>) {
      state.currentVacancy = action.payload;
    },
    setModalVisibility(state: TVacaniesListState, action: PayloadAction<boolean>) {
        state.isPreviewModalVisible = action.payload;
      },
  },
});

export const { setCurrentVacancyData, setModalVisibility } = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
