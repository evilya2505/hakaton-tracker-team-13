import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { applicant } from "../../utils/types";

const applicantsSlice = createSlice({
  name: "applicants",
  initialState: {
    isUserModalVisible: false as boolean,
    selectedCardData: {} as applicant,
  },
  reducers: {
    setUserModalVisibility(state, action: PayloadAction<boolean>) {
      state.isUserModalVisible = action.payload;
    },
    setSelectedCardData(state, action: PayloadAction<applicant>) {
      state.selectedCardData = action.payload;
    },
  },
});

export const { setUserModalVisibility, setSelectedCardData } = applicantsSlice.actions;

export default applicantsSlice.reducer;
