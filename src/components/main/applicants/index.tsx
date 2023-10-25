import React from "react";
import applicants from "./index.module.css";
import ApplicantsCard from "./applicants-card";
import page from "../index.module.css";
import { cardsList } from "../../../constants/cardsList";
import BasicModal from "../../modal/modal";
import StudentModal from "../../student-modal/student-modal";

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
    <div className={`${page.pageElement} ${applicants.container}`}>
      <h2 className={applicants.title}>Соискатели</h2>
      <ul className={applicants.list}>
        {cardsList.map(
          (element: { name: string; city: string; age: string }, index) => {
            return (
              <li key={index}>
                <ApplicantsCard
                  name={element.name}
                  city={element.city}
                  age={element.age}
                  onClick={openUserModal}
                />
              </li>
            );
          }
        )}
      </ul>
      <BasicModal closePopup={closeModal} isVisible={isUserModalVisible}>
        <StudentModal />
      </BasicModal>
    </div>
  );
};

export default Applicants;
