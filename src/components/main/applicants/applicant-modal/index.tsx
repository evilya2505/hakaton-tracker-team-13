import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MainStudentInfo from "./applicant-info";
import studentModal from "./index.module.css";
import MainStudentCv from "./applicant-cv";
import { TogglingButton } from "../applicants-card/toggling-button";
import { useSelector } from "../../../../services/hooks";

export default function StudentModal() {
  const [value, setValue] = React.useState(0);
  const selectedCard = useSelector(
    (state) => state.applicants.selectedCardData
  );

  // const [isAdded, setIsAdded] = useState(
  //   selectedCard.response_status[0] === 0
  // );

  const [isAdded, setIsAdded] = useState(false);

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
      <div className={studentModal.test}>
        <TogglingButton
          isAdded={isAdded}
          setIsAdded={setIsAdded}
          applicant={selectedCard}
        />
      </div>
    </div>
  );
}
