import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddVacancyFormValues } from "../../utils/types";
import { TVacancy } from "../../utils/types";
import { TApplicant } from "../../utils/types";

export interface TVacaniesListState {
  currentVacancy: AddVacancyFormValues | null;
  currentVacancyPage: TVacancy | null;
  isPreviewModalVisible: boolean;
  isAddVacancyModalVisible: boolean;
  vacancies: Array<TVacancy>;
  neededDataRequest: boolean;
  neededDataFailed: boolean;
  currentVacancyApplicantsList: Array<TApplicant>;
}

export const initialState: TVacaniesListState = {
  currentVacancyPage: null,
  currentVacancy: null,
  isPreviewModalVisible: false,
  isAddVacancyModalVisible: false,
  vacancies: [],
  neededDataRequest: false,
  neededDataFailed: false,
  currentVacancyApplicantsList: [],
};

const vacanciesSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getCityApplicantsInfo(state) {
      state.neededDataRequest = true;
      state.neededDataFailed = false;
    },
    getCityApplicantsInfoSuccess(state, action: PayloadAction<TVacancy>) {
      state.currentVacancyPage = action.payload;
      state.neededDataRequest = false;
      state.neededDataFailed = false;
    },
    getCityApplicantsInfoFailed(state) {
      state.neededDataRequest = false;
      state.neededDataFailed = true;
    },
    setCurrentVacancyData(
      state: TVacaniesListState,
      action: PayloadAction<AddVacancyFormValues>
    ) {
      state.currentVacancy = action.payload;
    },
    setCurrentVacancyApplicantsList(
      state: TVacaniesListState,
      action: PayloadAction<Array<TApplicant>>
    ) {
      state.currentVacancyApplicantsList = action.payload;
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
  getCityApplicantsInfo,
  getCityApplicantsInfoFailed,
  getCityApplicantsInfoSuccess,
  setModalVisibility,
  setAddVacancyModalVisibility,
  setVacancies,
  setCurrentVacancyApplicantsList,
} = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
