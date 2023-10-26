import { combineReducers } from "redux";
import authSlice from "./auth";
import vacanciesSlice from './vacancies'

export const rootReducer = combineReducers({
  auth: authSlice,
  vacancies: vacanciesSlice,
});
