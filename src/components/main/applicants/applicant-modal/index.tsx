import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MainStudentInfo from "./applicant-info";
import studentModal from "./index.module.css";
import MainStudentCv from "./applicant-cv";
import { applicant } from "../../../../constants/applicantsList";
import { TogglingButton } from "../applicants-card/toggling-button";

interface IModalProps {
  selectedCard: applicant;
}

export default function StudentModal({ selectedCard }: IModalProps) {
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
      {value === 0 && <MainStudentInfo selectedCard={selectedCard} />}
      {value === 1 && <MainStudentCv selectedCard={selectedCard} />}
      <div className={studentModal.test}>
        <TogglingButton />
      </div>
    </div>
  );
}
