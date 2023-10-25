import React from "react";
import applicantsPage from "./index.module.css";
import ApplicantsCard from "./applicants-card";
import page from "../index.module.css";
import { applicant, applicants } from "../../../constants/applicantsList";
import BasicModal from "../../modal/modal";
import StudentModal from "../../student-modal/student-modal";
import ApplicantsFilter from "./applicants-filter";

const Applicants: React.FC<{}> = (): JSX.Element => {
  const [isUserModalVisible, setIsUserModalVisible] =
    React.useState<boolean>(false);

  function closeModal() {
    setIsUserModalVisible(false);
  }

  function openUserModal() {
    setIsUserModalVisible(true);
  }
  return (
    <div className={`${page.pageElement} ${applicantsPage.container}`}>
      <h2 className={applicantsPage.title}>Соискатели</h2>
      <ApplicantsFilter />
      <ul className={applicantsPage.list}>
        {applicants.map((element: applicant, index) => {
          return (
            <li key={index} onClick={openUserModal}>
              <ApplicantsCard applicant={element} onClick={openUserModal} />
            </li>
          );
        })}
      </ul>
      <BasicModal closePopup={closeModal} isVisible={isUserModalVisible}>
        <StudentModal />
      </BasicModal>
    </div>
  );
};

export default Applicants;
