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
  currentVacancyApplicantsListNotFiltered: Array<TApplicant>;
  addNewVacancyRequest: boolean;
  addNewVacancyFailed: boolean;
  editVacancyRequest: boolean;

  editApplicantStatusRequest: boolean;
  editApplicantStatusFailed: boolean;

  infoForFilters: {
    cities: string[];
    expiriences: string[];
    work_formats: string[];
    edu_statuses: string[];
    courses: string[];
  };

  searchResults: Array<TApplicant | undefined>;
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
  currentVacancyApplicantsListNotFiltered: [],
  addNewVacancyRequest: false,
  addNewVacancyFailed: false,
  editVacancyRequest: false,

  editApplicantStatusRequest: false,
  editApplicantStatusFailed: false,
  infoForFilters: {
    cities: [],
    expiriences: [],
    work_formats: [],
    edu_statuses: [],
    courses: [],
  },

  searchResults: [],
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
    setCurrentVacancyApplicantsListNotFiltered(
      state: TVacaniesListState,
      action: PayloadAction<Array<TApplicant>>
    ) {
      state.currentVacancyApplicantsListNotFiltered = action.payload;
    },
    setCurrentVacancyApplicantsList(
      state: TVacaniesListState,
      action: PayloadAction<{ data: Array<TApplicant>; isChecked: boolean }>
    ) {
      const applicants: TApplicant[] = action.payload.data;
      state.currentVacancyApplicantsList = action.payload.data;
      if (!action.payload.isChecked) {
        state.infoForFilters = {
          cities: [],
          expiriences: [],
          work_formats: [],
          edu_statuses: [],
          courses: [],
        };
        for (let i = 0; i < applicants.length; i++) {
          const workFormat = applicants[i].work_format;
          const city = applicants[i].city;
          const work_status = applicants[i].work_status;
          const edu_status = applicants[i].edu_status;
          const course = applicants[i].course;

          if (!state.infoForFilters.work_formats.includes(workFormat)) {
            const newData = [...state.infoForFilters.work_formats, workFormat];
            const updatedInfoForFilters = {
              ...state.infoForFilters,
              work_formats: newData,
            };
            state.infoForFilters = updatedInfoForFilters;
          }

          if (!state.infoForFilters.cities.includes(city)) {
            const newData = [...state.infoForFilters.cities, city];
            const updatedInfoForFilters = {
              ...state.infoForFilters,
              cities: newData,
            };
            state.infoForFilters = updatedInfoForFilters;
          }

          if (!state.infoForFilters.expiriences.includes(work_status)) {
            const newData = [...state.infoForFilters.expiriences, work_status];
            const updatedInfoForFilters = {
              ...state.infoForFilters,
              expiriences: newData,
            };
            state.infoForFilters = updatedInfoForFilters;
          }

          if (!state.infoForFilters.edu_statuses.includes(edu_status)) {
            const newData = [...state.infoForFilters.edu_statuses, edu_status];
            const updatedInfoForFilters = {
              ...state.infoForFilters,
              edu_statuses: newData,
            };
            state.infoForFilters = updatedInfoForFilters;
          }

          if (!state.infoForFilters.courses.includes(course)) {
            const newData = [...state.infoForFilters.courses, course];
            const updatedInfoForFilters = {
              ...state.infoForFilters,
              courses: newData,
            };
            state.infoForFilters = updatedInfoForFilters;
          }
        }
      }
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
    addNewVacancySuccess(
      state: TVacaniesListState,
      action: PayloadAction<TVacancy>
    ) {
      state.vacancies = [action.payload, ...state.vacancies];
      state.addNewVacancyRequest = false;
      state.addNewVacancyFailed = false;
    },
    editVacancyRequest(state: TVacaniesListState) {
      state.editVacancyRequest = true;
      state.addNewVacancyFailed = false;
    },
    editVacancySuccess(
      state: TVacaniesListState,
      action: PayloadAction<TVacancy>
    ) {
      const updatedVacancy = action.payload;

      state.vacancies = state.vacancies.map((vacancy) => {
        if (vacancy.id === updatedVacancy.id) {
          return updatedVacancy;
        }
        return vacancy;
      });

      state.currentVacancyPage = action.payload;
      state.editVacancyRequest = false;
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
    setApplicantStatusSuccess(
      state: TVacaniesListState,
      action: PayloadAction<{
        applicant: number;
        vacancy: string;
        status: string;
      }>
    ) {
      if (action.payload.status !== undefined) {
        state.currentVacancyApplicantsList =
          state.currentVacancyApplicantsList.map((applicant) => {
            if (applicant.id === action.payload.applicant) {
              return {
                ...applicant,
                response_status: action.payload.status,
              };
            } else {
              return applicant;
            }
          });
      }
      state.editApplicantStatusRequest = false;
      state.editApplicantStatusRequest = false;
    },
    setSearchResult(
      state: TVacaniesListState,
      action: PayloadAction<Array<TApplicant | undefined>>
    ) {
      state.searchResults = action.payload;
    },
  },
});

export const {
  setSearchResult,
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
  setCurrentVacancyApplicantsListNotFiltered,
} = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
