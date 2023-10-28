import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TApplicant } from "../../utils/types";

const applicantsSlice = createSlice({
  name: "applicants",
  initialState: {
    isUserModalVisible: false as boolean,
    selectedCardData: {} as TApplicant,
    applicants: [] as Array<TApplicant>,
  },
  reducers: {
    setUserModalVisibility(state, action: PayloadAction<boolean>) {
      state.isUserModalVisible = action.payload;
    },
    setSelectedCardData(state, action: PayloadAction<TApplicant>) {
      state.selectedCardData = action.payload;
    },
    setApplicants(state, action: PayloadAction<Array<TApplicant>>){
      state.applicants = action.payload;
    }
  },
});

export const { setUserModalVisibility, setSelectedCardData, setApplicants } =
  applicantsSlice.actions;

export default applicantsSlice.reducer;
