import { PropsWithChildren } from "react";
import main from "./index.module.css";
import { useNavigate } from "react-router";
import CandidateTable from "./table";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Button, Chip, Tab, IconButton } from "@mui/material";
import React from "react";
import arrowLeftIcon from "../../../../images/ArrowLeft.svg";
import VacancyInfo from "./vacany-info";
import editIcon from "../../../../images/edit.svg";
import { Outlet, useLocation } from "react-router-dom";

const Vacancy: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleEditButton() {
    if (pathname.includes("edit")) {
      navigate(-1);
    } else {
      navigate("edit");
    }
  }

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
        {pathname.includes("edit") ? "Инфо" : "Мои вакансии"}
      </Button>
      <div className={main.section}>
        <h1 className={main.title}>UX/UI дизайнер</h1>
        <p className={main.date}>Опубликована: 21 октября 2023</p>
      </div>
      <div className={main.section}>
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
        {value === "1" && (
          <IconButton
            onClick={handleEditButton}
            color="secondary"
            aria-label="Редактирование"
          >
            <img src={editIcon} alt="иконка редактирования" />
          </IconButton>
        )}
      </div>

      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Инфо" value="1" />
          <Tab
            label="На рассмотрении"
            value="2"
            disabled={pathname.includes("edit")}
          />
        </TabList>
        <TabPanel sx={{ padding: "0" }} value="2">
          <CandidateTable />
        </TabPanel>
        <TabPanel value="1">
          {pathname.includes("edit") ? <Outlet /> : <VacancyInfo />}
        </TabPanel>
      </TabContext>
    </main>
  );
};

export default Vacancy;
