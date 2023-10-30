import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import compareApplicantsModal from "./index.module.css";
import MainInfoModal from "../main-info-modal";
import { TApplicant } from "../../../../../utils/types";

interface ICompareApplicantsModalProps {
  studentFirst?: TApplicant | undefined;
  studentSecond?: TApplicant | undefined;
}
export default function CompareApplicantsModal({studentFirst, studentSecond} : ICompareApplicantsModalProps) {
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
      {value === 0 && <MainInfoModal studentFirst={studentFirst} studentSecond={studentSecond}/>}
      {/* {value === 1 && <MainStudentCv selectedCard={selectedCard} />} */}
    </div>
  );
}
