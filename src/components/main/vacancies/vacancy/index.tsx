import { PropsWithChildren } from "react";
import main from "./index.module.css";
import { useNavigate } from "react-router";
import CandidateTable from "./table";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Button, Chip, Tab, IconButton } from "@mui/material";
import React from "react";
import VacancyInfo from "./vacany-info";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "../../../../services/hooks";
import {
  gradeDropDown,
  workHoursDropDown,
} from "../../../../constants/dropDownVariants";

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

  return (
    <main className={main.page}>
      <Button
        onClick={handleBackButton}
        className={`${main.button}`}
        variant="text"
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M22.5 13.75H6"
              stroke="#1A1B22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 7L6 13.75L12.75 20.5"
              stroke="#1A1B22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
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
            <Chip
              className={main.chip}
              label={
                workHoursDropDown.find(
                  (workHours) => workHours.value === vacancyObject?.work_format
                )?.label
              }
            />
          </li>
          <li className={main.tag}>
            <Chip
              className={main.chip}
              label={
                gradeDropDown.find(
                  (grade) => grade.value === vacancyObject?.grade
                )?.label
              }
            />
          </li>
        </ul>
        {value === "1" && (
          <IconButton
            onClick={handleEditButton}
            color="secondary"
            aria-label="Редактирование"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M30.0252 9.97528C29.3997 9.35077 28.552 9 27.6681 9C26.7842 9 25.9365 9.35077 25.311 9.97528L10.3478 24.9384C9.91934 25.3645 9.57959 25.8714 9.34824 26.4296C9.11689 26.9879 8.99853 27.5864 9.00001 28.1907V30.0795C9.00001 30.3235 9.09694 30.5575 9.26948 30.7301C9.44202 30.9026 9.67603 30.9995 9.92003 30.9995H11.8088C12.4131 31.0012 13.0116 30.8831 13.5699 30.6519C14.1281 30.4207 14.635 30.081 15.0611 29.6526L30.0252 14.6885C30.6494 14.0631 31 13.2155 31 12.3319C31 11.4483 30.6494 10.6007 30.0252 9.97528ZM13.7602 28.3517C13.2413 28.8672 12.5402 29.1574 11.8088 29.1595H10.84V28.1907C10.8391 27.8281 10.9101 27.469 11.0489 27.134C11.1877 26.7991 11.3916 26.495 11.6487 26.2394L23.0045 14.8836L25.1206 16.9996L13.7602 28.3517ZM28.7234 13.3876L26.4178 15.6941L24.3018 13.5827L26.6082 11.2762C26.7472 11.1375 26.9121 11.0276 27.0935 10.9527C27.2749 10.8778 27.4693 10.8393 27.6656 10.8396C27.8619 10.8398 28.0562 10.8786 28.2374 10.954C28.4187 11.0293 28.5833 11.1395 28.722 11.2785C28.8606 11.4174 28.9705 11.5823 29.0454 11.7637C29.1204 11.9452 29.1588 12.1396 29.1586 12.3358C29.1584 12.5321 29.1195 12.7264 29.0442 12.9077C28.9689 13.0889 28.8586 13.2536 28.7197 13.3922L28.7234 13.3876Z"
                fill="#1D6BF3"
              />
            </svg>
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
