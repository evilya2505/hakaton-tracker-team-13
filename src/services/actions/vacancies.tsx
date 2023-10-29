import mainApi from "../../utils/MainApi";
import { TVacancy } from "../../utils/types";
import { AppDispatch } from "../store";
import {
  getCityApplicantsInfo,
  getCityApplicantsInfoFailed,
  getCityApplicantsInfoSuccess,
  setCurrentVacancyApplicantsList,
} from "../reducers/vacancies";

export const getNeededVacancyData = (vacancy: TVacancy) => {
  return function (dispatch: AppDispatch) {
    dispatch(getCityApplicantsInfo());
    let vacancyTemp = { ...vacancy };

    mainApi
      .getVacancysApplicants(vacancy.id)
      .then((resApplicants) => {
        dispatch(setCurrentVacancyApplicantsList(resApplicants));
        mainApi
          .getCityById(parseInt(vacancy.city))
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
