import { PropsWithChildren, useEffect } from "react";
import main from "./index.module.css";
import { useNavigate } from "react-router";
import CandidateTable from "./table/table";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Button, Chip, Tab } from "@mui/material";
import React from "react";
import SearchBar from "../../../search-form/search-form";
import FiltersMenu from "../../../filters-menu/filters-menu";
import VacancyDropDown from "./vacancy-drop-down/vacancy-drop-down";
import arrowLeftIcon from "../../../../images/ArrowLeft.svg";

const Vacancy: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <main className={main.page}>
      <Button
        onClick={handleBackButton}
        className={`${main.button}`}
        variant="text"
        startIcon={<img src={arrowLeftIcon} alt="иконка влево" />}
      >
        Мои вакансии
      </Button>
      <div className={main.titleContainer}>
        <h1 className={main.title}>UX/UI дизайнер</h1>
        <p className={main.date}>Опубликована: 21 октября 2023</p>
      </div>
      <ul className={main.tagsList}>
        <li className={main.tag}>
          <Chip className={main.chip} label="Москва" />
        </li>
        <li className={main.tag}>
          <Chip className={main.chip} label="Полная занятость" />
        </li>
        <li className={main.tag}>
          <Chip className={main.chip} label="Офис" />
        </li>
        <li className={main.tag}>
          <Chip className={main.chip} label="Junior" />
        </li>
      </ul>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Инфо" value="1" />
          <Tab label="На рассмотрении" value="2" />
        </TabList>
        <TabPanel sx={{ padding: "0" }} value="2">
          <CandidateTable />
        </TabPanel>
        <TabPanel value="2"></TabPanel>
      </TabContext>
    </main>
  );
};

export default Vacancy;
