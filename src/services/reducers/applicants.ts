import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TApplicant } from "../../utils/types";
import { TVacancy } from "../../utils/types";

const applicantsSlice = createSlice({
  name: "applicants",
  initialState: {
    isUserModalVisible: false as boolean,
    selectedCardData: {} as TApplicant,
    applicants: [] as Array<TApplicant>,
    selectedDropDownVacancy: {} as TVacancy,
    checked: [] as { key: string; value: string }[],
    shownApplicants: [] as Array<TApplicant>,
  },
  reducers: {
    setUserModalVisibility(state, action: PayloadAction<boolean>) {
      state.isUserModalVisible = action.payload;
    },
    setSelectedCardData(state, action: PayloadAction<TApplicant>) {
      state.selectedCardData = action.payload;
    },
    setApplicants(state, action: PayloadAction<Array<TApplicant>>) {
      console.log(action.payload);
      state.applicants = action.payload;
    },
    setSelectedDropDownVacancy(state, action: PayloadAction<TVacancy>) {
      state.selectedDropDownVacancy = action.payload;
    },
    setChecked(state, action: PayloadAction<{ key: string; value: string }>) {
      state.checked = [action.payload, ...state.checked];
    },
    unsetChecked(state, action: PayloadAction<{ key: string; value: string }>) {
      console.log(action.payload);
      state.checked = state.checked.filter(
        (item) => item.value !== action.payload.value
      );
    },
    setShownApplicants(state, action: PayloadAction<Array<TApplicant>>) {
      state.shownApplicants = action.payload;
    },
    clearChecked(state) {
      state.checked = [];
    },
  },
});

export const {
  clearChecked,
  setShownApplicants,
  unsetChecked,
  setChecked,
  setUserModalVisibility,
  setSelectedCardData,
  setApplicants,
  setSelectedDropDownVacancy,
} = applicantsSlice.actions;

export default applicantsSlice.reducer;
