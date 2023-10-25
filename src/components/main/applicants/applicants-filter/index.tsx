import { useState } from "react";
import applicantsFilter from "./index.module.css";
import FilterModal from "../../../filter-modal";

const ApplicantsFilter: React.FC<{}> = (): JSX.Element => {
  const [isFilterModalVisible, setIsFilterModalVisible] =
    useState<boolean>(false);

  function closeModal() {
    setIsFilterModalVisible(false);
  }

  function openModal() {
    setIsFilterModalVisible(true);
  }

  return (
    <div className={applicantsFilter.container}>
      <p>Здесь будет поиск</p>
      <p>Здесь вакансии</p>
      <button onClick={openModal}>Фильтры</button>
      <FilterModal closePopup={closeModal} isVisible={isFilterModalVisible} />
    </div>
  );
};
export default ApplicantsFilter;
