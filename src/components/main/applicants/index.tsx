import React from "react";
import { useDispatch, useSelector } from "../../../services/hooks";
import {
  setSelectedCardData,
  setUserModalVisibility,
} from "../../../services/reducers/applicants";
import applicantsPage from "./index.module.css";
import page from "../index.module.css";
import { applicant, applicants } from "../../../constants/applicantsList";
import ApplicantsCard from "./applicants-card";
import BasicModal from "../../modal/modal";
import StudentModal from "./applicant-modal";
import ApplicantsFilter from "./applicants-filter";

const Applicants: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const isUserModalVisible = useSelector(
    (state) => state.applicants.isUserModalVisible
  );

  function closeUserModal() {
    dispatch(setUserModalVisibility(false));
  }

  function openUserModal(card: applicant) {
    dispatch(setUserModalVisibility(true));
    dispatch(setSelectedCardData(card));
  }
  return (
    <div className={`${page.pageElement} ${applicantsPage.container}`}>
      <h2 className={applicantsPage.title}>Соискатели</h2>
      <ApplicantsFilter />
      <ul className={applicantsPage.list}>
        {applicants.map((element: applicant, index) => {
          return (
            <li key={index} onClick={() => openUserModal(element)}>
              <ApplicantsCard applicant={element} />
            </li>
          );
        })}
      </ul>
      <BasicModal closePopup={closeUserModal} isVisible={isUserModalVisible}>
        <StudentModal />
      </BasicModal>
    </div>
  );
};

export default Applicants;
