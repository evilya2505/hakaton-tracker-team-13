import * as React from "react";
import vacancyInfoDropDown from "./index.module.css";
import Button from "../../../applicants/applicants-card/button";
import arrowDownIcon from "../../../../../images/arrow_down_blue.svg";
import arrowUpIcon from "../../../../../images/arrow_up_blue.svg";

interface IDropDownProps {
  title?: string;
  text?: string;
}

export default function DropDown({ title, text }: IDropDownProps) {
  const [isModuleVisible, setIsModuleVisible] = React.useState<boolean>(false);

  function handleModuleClick() {
    setIsModuleVisible(!isModuleVisible);
  }
  return (
    <>
      <Button
        onClick={handleModuleClick}
        className={`${vacancyInfoDropDown.menuButton} ${vacancyInfoDropDown.button}`}
        variant="text"
        endIcon={
          !isModuleVisible ? (
            <img src={arrowDownIcon} alt="иконка вниз" />
          ) : (
            <img src={arrowUpIcon} alt="иконка вверх" />
          )
        }
      >
        {title}
      </Button>
      <div
        className={` ${
          !isModuleVisible
            ? `${vacancyInfoDropDown.info}`
            : `${vacancyInfoDropDown.infoVisible}`
        }`}
      >
        <p className={vacancyInfoDropDown.text}>{text}</p>
      </div>
    </>
  );
}
