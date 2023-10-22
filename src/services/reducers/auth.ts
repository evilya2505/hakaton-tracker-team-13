import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUserInfo } from "../types/data";

export interface TAuthListState {
  userInfo: TUserInfo;
  request: boolean;
  requestFailed: boolean;
  loggedIn: boolean;
}

export const initialState: TAuthListState = {
  userInfo: { email: "", name: "" },
  request: false,
  requestFailed: false,
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(state: TAuthListState, action: PayloadAction<TUserInfo>) {
      state.userInfo.name = action.payload.name;
    },
  },
});
export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
