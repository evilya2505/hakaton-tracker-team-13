import { useState } from "react";
import applicantsFilter from "./index.module.css";
import FilterModal from "../../../filter-modal";
import SearchBar from "../../../search-form/search-form";
import VacanciesDropDown from "../../../vacancies-drop-down/vacancies-drop-down";
import FiltersMenu from "../../../filters-menu/filters-menu";

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
      <div className={applicantsFilter.searchWrapper}>
        <SearchBar text="Поиск" type="applicants" />
      </div>
      <VacanciesDropDown />
      <FiltersMenu type={"applicants"} />
      <FilterModal closePopup={closeModal} isVisible={isFilterModalVisible} />
    </div>
  );
};
export default ApplicantsFilter;
