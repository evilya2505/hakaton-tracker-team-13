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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.707 8.28578C18.5193 8.10279 18.2647 8 17.9993 8C17.7339 8 17.4794 8.10279 17.2917 8.28578L12.7016 12.762C12.5113 12.9401 12.2577 13.0396 11.994 13.0396C11.7302 13.0396 11.4766 12.9401 11.2863 12.762L6.69623 8.28578C6.50746 8.10798 6.25463 8.0096 5.9922 8.01182C5.72977 8.01405 5.47873 8.1167 5.29316 8.29767C5.10758 8.47864 5.00232 8.72345 5.00004 8.97937C4.99776 9.23529 5.09864 9.48185 5.28096 9.66594L9.87006 14.1422C10.1489 14.4141 10.4799 14.6299 10.8443 14.7771C11.2086 14.9242 11.5991 15 11.9935 15C12.3878 15 12.7783 14.9242 13.1427 14.7771C13.507 14.6299 13.838 14.4141 14.1169 14.1422L18.707 9.66594C18.8946 9.4829 19 9.23467 19 8.97586C19 8.71704 18.8946 8.46882 18.707 8.28578Z"
                fill="#1D6BF3"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.9993 15C17.7339 14.9999 17.4793 14.8967 17.2917 14.7129L12.7016 10.2185C12.5113 10.0397 12.2577 9.93984 11.994 9.93984C11.7302 9.93984 11.4766 10.0397 11.2863 10.2185L6.69623 14.7129C6.50746 14.8914 6.25463 14.9902 5.9922 14.9879C5.72977 14.9857 5.47873 14.8826 5.29316 14.7009C5.10758 14.5192 5.00232 14.2734 5.00004 14.0165C4.99776 13.7595 5.09864 13.512 5.28096 13.3271L9.87106 8.83282C10.4432 8.29825 11.2036 8 11.9945 8C12.7853 8 13.5457 8.29825 14.1179 8.83282L18.707 13.3271C18.8469 13.4642 18.9422 13.6388 18.9808 13.8289C19.0194 14.0189 18.9996 14.216 18.9238 14.395C18.8481 14.574 18.7198 14.7271 18.5553 14.8348C18.3907 14.9425 18.1972 15 17.9993 15Z"
                fill="#1D6BF3"
              />
            </svg>
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
