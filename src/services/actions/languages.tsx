import mainApi from "../../utils/MainApi";
import { AppDispatch } from "../store";
import { getLanguagesFailed, getLanguagesRequest, getLanguagesSuccess } from "../reducers/languages";

export const getLanguages = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getLanguagesRequest());

    mainApi
      .getLanguages()
      .then((data) => {
        dispatch(getLanguagesSuccess(data.results));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getLanguagesFailed());
      });
  };
};
