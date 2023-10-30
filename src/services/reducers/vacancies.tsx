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
  addNewVacancyRequest: boolean;
  addNewVacancyFailed: boolean;
  editVacancyRequest: boolean;

  editApplicantStatusRequest: boolean;
  editApplicantStatusFailed: boolean;
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
  addNewVacancyRequest: false,
  addNewVacancyFailed: false,
  editVacancyRequest: false,

  editApplicantStatusRequest: false,
  editApplicantStatusFailed: false,
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
    addNewVacancyRequest(state: TVacaniesListState) {
      state.addNewVacancyRequest = true;
      state.addNewVacancyFailed = false;
    },
    addNewVacancyFailed(state: TVacaniesListState) {
      state.editVacancyRequest = false;
      state.addNewVacancyRequest = false;
      state.addNewVacancyFailed = true;
    },
    addNewVacancySuccess(state: TVacaniesListState, action: PayloadAction<TVacancy>) {
      state.vacancies = [action.payload, ...state.vacancies]
      state.addNewVacancyRequest =  false;
      state.addNewVacancyFailed = false;
    },
    editVacancyRequest(state: TVacaniesListState) {
      state.editVacancyRequest = true;
      state.addNewVacancyFailed = false;
    },
    editVacancySuccess(state: TVacaniesListState, action: PayloadAction<TVacancy>) {
      const updatedVacancy = action.payload;

      state.vacancies = state.vacancies.map(vacancy => {
        if (vacancy.id === updatedVacancy.id) {
          return updatedVacancy;
        }
        return vacancy;
      });

      state.currentVacancyPage = action.payload;
      state.editVacancyRequest =  false;
      state.addNewVacancyFailed = false;
    },
    setApplicantsStatusFailed(state: TVacaniesListState) {
      state.editApplicantStatusRequest = false;
      state.editApplicantStatusFailed = true;
    },
    setApplicantStatusRequest(state: TVacaniesListState) {
      state.editApplicantStatusRequest = true;
      state.editApplicantStatusRequest = false;
    },
    setApplicantStatusSuccess(state: TVacaniesListState, action: PayloadAction<{applicant: number, vacancy: string, status: string}>) {
      if (action.payload.status !== undefined) {
        state.currentVacancyApplicantsList = state.currentVacancyApplicantsList.map(applicant => {
          if (applicant.id === action.payload.applicant) {
            return {
              ...applicant,
              response_status: action.payload.status
            };
          } else {
            return applicant;
          }
        });
      }
      console.log(state.currentVacancyApplicantsList);
      state.editApplicantStatusRequest = false;
      state.editApplicantStatusRequest = false;
    }
  },
});

export const {
  setApplicantStatusRequest,
  setApplicantStatusSuccess,
  setApplicantsStatusFailed,
  editVacancyRequest,
  editVacancySuccess,
  addNewVacancyRequest,
  addNewVacancyFailed,
  addNewVacancySuccess,
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
