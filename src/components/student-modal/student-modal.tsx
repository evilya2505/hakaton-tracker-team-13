import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MainStudentInfo from "../main-student-info/main-student-info";
import { Button } from "@mui/material";
import studentModal from "./student-modal.module.css";
import SubmitButton from "../submit-button/submit-button";
import MainStudentCv from "../main-student-cv/main-student-cv";

export default function StudentModal() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={studentModal.modal}>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Основная информация" />
          <Tab label="Резюме" />
        </Tabs>
      </div>
      {value === 0 && <MainStudentInfo />}
      {value === 1 && <MainStudentCv />}
      <div className={studentModal.buttons}>
        <Button className={studentModal.button} variant="outlined">
          Скрыть
        </Button>
        <div className={studentModal.test}>
          <SubmitButton text="Добавить" isDisabled={false} isFullWidth={true} />
        </div>
      </div>
    </div>
  );
}
