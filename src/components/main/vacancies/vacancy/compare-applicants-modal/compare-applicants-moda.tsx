import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import compareApplicantsModal from "./compare-applicants-modal.module.css";
import MainInfoModal from "../main-info-modal/main-info-modal";

export default function CompareApplicantsModal() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={compareApplicantsModal.modal}>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="compare applicants modal"
        >
          <Tab label="Информация профиля" />
          <Tab label="Резюме" />
        </Tabs>
      </div>
      {value === 0 && <MainInfoModal />}
      {/* {value === 1 && <MainStudentCv selectedCard={selectedCard} />} */}
    </div>
  );
}
