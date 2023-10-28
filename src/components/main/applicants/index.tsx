import React from "react";
import { useDispatch, useSelector } from "../../../services/hooks";
import {
  setSelectedCardData,
  setUserModalVisibility,
} from "../../../services/reducers/applicants";
import applicantsPage from "./index.module.css";
import page from "../index.module.css";
import ApplicantsCard from "./applicants-card";
import BasicModal from "../../modal/modal";
import StudentModal from "./applicant-modal";
import ApplicantsFilter from "./applicants-filter";
import { TApplicant } from "../../../utils/types";

const Applicants: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const isUserModalVisible = useSelector(
    (state) => state.applicants.isUserModalVisible
  );

  const applicants = useSelector((state) => state.applicants.applicants);

  function closeUserModal() {
    dispatch(setUserModalVisibility(false));
  }

  function openUserModal(card: TApplicant) {
    dispatch(setUserModalVisibility(true));
    dispatch(setSelectedCardData(card));
  }
  return (
    <div className={`${page.pageElement} ${applicantsPage.container}`}>
      <h2 className={applicantsPage.title}>Соискатели</h2>
      <ApplicantsFilter />
      <ul className={applicantsPage.list}>
        {applicants.map((element: TApplicant) => {
          return (
            <li key={element.id} onClick={() => openUserModal(element)}>
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
