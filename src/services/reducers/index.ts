import { combineReducers } from "redux";
import authSlice from "./auth";
import vacanciesSlice from "./vacancies";
import applicantsSlice from "./applicants";

export const rootReducer = combineReducers({
  auth: authSlice,
  vacancies: vacanciesSlice,
  applicants: applicantsSlice,
});
