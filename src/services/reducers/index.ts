import { combineReducers } from "redux";
import authSlice from "./auth";

export const rootReducer = combineReducers({
  auth: authSlice,
});
