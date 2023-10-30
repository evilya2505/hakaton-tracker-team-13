import { combineReducers } from "redux";
import authSlice from "./auth";
import vacanciesSlice from "./vacancies";
import applicantsSlice from "./applicants";
import citiesSlice from "./cities";
import languagesSlice from './languages';

export const rootReducer = combineReducers({
  auth: authSlice,
  vacancies: vacanciesSlice,
  applicants: applicantsSlice,
  cities: citiesSlice,
  languages: languagesSlice,
});
