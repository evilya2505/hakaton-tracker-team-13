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
import { useSelector } from "../../../../services/hooks";

const Vacancy: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const vacancyObject = useSelector(
    (store) => store.vacancies.currentVacancyPage
  );
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function formDate() {
    if (vacancyObject?.created !== undefined) {
      const inputDate: string = vacancyObject.created.toString();
      const [year, month, day] = inputDate.split("-").map(Number);
      const months: Array<string> = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ];
      const formattedDate: string = `${day} ${months[month - 1]} ${year}`;
      return formattedDate;
    }
  }

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

  React.useEffect(() => {
    console.log(vacancyObject);
  }, []);
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
        <h1 className={main.title}>{vacancyObject?.title}</h1>
        <p className={main.date}>Опубликована: {formDate()}</p>
      </div>
      <div className={main.section} style={{ minHeight: "40px" }}>
        <ul className={main.tagsList}>
          <li className={main.tag}>
            <Chip className={main.chip} label={vacancyObject?.city} />
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
          {pathname.includes("edit") ? (
            <Outlet />
          ) : (
            <VacancyInfo vacancy={vacancyObject} />
          )}
        </TabPanel>
      </TabContext>
    </main>
  );
};

export default Vacancy;
