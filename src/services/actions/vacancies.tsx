import mainApi, { applicantInVacancyProps } from "../../utils/MainApi";
import { TVacancy } from "../../utils/types";
import { AppDispatch } from "../store";
import {
  addNewVacancyFailed,
  addNewVacancyRequest,
  addNewVacancySuccess,
  editVacancyRequest,
  editVacancySuccess,
  getCityApplicantsInfo,
  getCityApplicantsInfoFailed,
  getCityApplicantsInfoSuccess,
  setCurrentVacancyApplicantsList,
  setApplicantsStatusFailed,
  setApplicantStatusRequest,
  setApplicantStatusSuccess
} from "../reducers/vacancies";

export const getNeededVacancyData = (vacancy: TVacancy) => {
  return function (dispatch: AppDispatch) {
    dispatch(getCityApplicantsInfo());
    let vacancyTemp = { ...vacancy };
    let city: number;
    if (vacancy?.city !== undefined) {
      if (typeof vacancy.city == "string") {
        city = parseInt(vacancy.city);
      } else {
        city = vacancy.city;
      }
    }

    mainApi
      .getVacancysApplicants(vacancy.id)
      .then((resApplicants) => {
        dispatch(setCurrentVacancyApplicantsList(resApplicants.results));
        mainApi
          .getCityById(city)
          .then((res) => {
            vacancyTemp.applicants = resApplicants.results;
            vacancyTemp.city = res.name;
            dispatch(getCityApplicantsInfoSuccess(vacancyTemp));
          })
          .catch((err) => {
            dispatch(getCityApplicantsInfoFailed());
          });
      })
      .catch((err) => dispatch(getCityApplicantsInfoFailed()));
  };
};

export const addNewVacancy = (vacancy: TVacancy) => {
  return function (dispatch: AppDispatch) {
    dispatch(addNewVacancyRequest());
    mainApi
    .addVacancy(vacancy)
    .then(data => {
      dispatch(addNewVacancySuccess(data));
    })
    .catch(err => {
      console.log(err);
      dispatch(addNewVacancyFailed());
    });
  };
};

export const editVacancy = (newInfo: TVacancy, id: number | undefined) => {
  return function (dispatch: AppDispatch) {
    dispatch(editVacancyRequest());

    mainApi
    .partlyEditVacancy(newInfo, id)
    .then(data => {
      let vacancyTemp = { ...data };

      mainApi
      .getCityById(data.city)
      .then((res) => {
        vacancyTemp.applicants = data;
        vacancyTemp.city = res.name;
        dispatch(getCityApplicantsInfoSuccess(vacancyTemp));
        dispatch(editVacancySuccess(vacancyTemp));
      })
      .catch((err) => {
        dispatch(getCityApplicantsInfoFailed());
      });

    })
    .catch(err => {
      console.log(err);
      dispatch(addNewVacancyFailed());
    });
  };
};


export const editCandidateStatus = ({applicantId, vacancyId, status}: applicantInVacancyProps) => {
  return function (dispatch: AppDispatch) {
    dispatch(setApplicantStatusRequest());

      mainApi.updateApplicantStatus({applicantId, vacancyId, status})
      .then(data => {
        dispatch(setApplicantStatusSuccess(data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setApplicantsStatusFailed());
      })
  };
};
