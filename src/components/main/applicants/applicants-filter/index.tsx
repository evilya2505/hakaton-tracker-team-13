import { useState } from "react";
import applicantsFilter from "./index.module.css";
import FilterModal from "../../../filter-modal";
import { SearchBar } from "../../../search-form/search-form";
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
      <p>
        <SearchBar />
      </p>
      <p>
        <VacanciesDropDown />
      </p>
      <FiltersMenu />
      <FilterModal closePopup={closeModal} isVisible={isFilterModalVisible} />
    </div>
  );
};
export default ApplicantsFilter;
