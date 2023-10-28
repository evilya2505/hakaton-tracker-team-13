import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddVacancyFormValues } from "../../utils/types";
import { TVacancy } from "../../utils/types";

export interface TVacaniesListState {
  currentVacancy: AddVacancyFormValues | null;
  isPreviewModalVisible: boolean;
  isAddVacancyModalVisible: boolean;
  vacancies: Array<TVacancy>;
}

export const initialState: TVacaniesListState = {
  currentVacancy: null,
  isPreviewModalVisible: false,
  isAddVacancyModalVisible: false,
  vacancies: [],
};

const vacanciesSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentVacancyData(
      state: TVacaniesListState,
      action: PayloadAction<AddVacancyFormValues>
    ) {
      state.currentVacancy = action.payload;
    },
    setModalVisibility(
      state: TVacaniesListState,
      action: PayloadAction<boolean>
    ) {
      state.isPreviewModalVisible = action.payload;
    },
    setAddVacancyModalVisibility(
      state: TVacaniesListState,
      action: PayloadAction<boolean>
    ) {
      state.isAddVacancyModalVisible = action.payload;
    },
    setVacancies(
      state: TVacaniesListState,
      action: PayloadAction<Array<TVacancy>>
    ) {
      state.vacancies = action.payload;
    },
  },
});

export const {
  setCurrentVacancyData,
  setModalVisibility,
  setAddVacancyModalVisibility,
  setVacancies,
} = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
