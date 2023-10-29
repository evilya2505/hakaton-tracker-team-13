import mainApi from "../../utils/MainApi";
import { AppDispatch } from "../store";
import {
  getCitiesFailed,
  getCitiesRequest,
  getCitiesSuccess,
} from "../reducers/cities";

export const getCities = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getCitiesRequest());

    mainApi
      .getCities()
      .then((data) => {
        dispatch(getCitiesSuccess(data.results));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getCitiesFailed());
      });
  };
};
