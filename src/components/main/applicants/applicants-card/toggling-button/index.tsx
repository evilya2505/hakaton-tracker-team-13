import togglingButton from "./index.module.css";
import { SetStateAction, SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import { Dispatch } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useSelector } from "../../../../../services/hooks";
import mainApi from "../../../../../utils/MainApi";
import { TApplicant } from "../../../../../utils/types";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "var(--main-blue)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    backgroundColor: "#ACCCFF",
  },
}));

type togglingButtonProps = {
  isAdded: boolean;
  setIsAdded: Dispatch<SetStateAction<boolean>>;
  applicant: TApplicant;
};

export const TogglingButton = ({
  isAdded,
  setIsAdded,
  applicant,
}: togglingButtonProps) => {
  const selectedDropDownVacancy = useSelector(
    (state) => state.applicants.selectedDropDownVacancy
  );

  const [openSnackbar, setOpenSnackBar] = useState(false);
  const [progress, setProgress] = useState(100);

  function toggleState(e: SyntheticEvent) {
    e.stopPropagation();
    setOpenSnackBar(true);
    setProgress(100);
    if (selectedDropDownVacancy.id) {
      if (!isAdded) {
        mainApi.updateApplicantStatus({
          applicantId: selectedDropDownVacancy.id,
          vacancyId: applicant.id,
          status: "Кандидат"
        });
      } else {
        mainApi.deleteApplicantFromVacancy({
          applicantId: selectedDropDownVacancy.id,
          vacancyId: applicant.id,
        });
        setIsAdded(!isAdded);
      }
    }
  }

  function snackbarMsg(isAdded: boolean) {
    const msg: string = isAdded ? "Кандидат добавлен" : "Кандидат удален";
    return msg;
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  useEffect(() => {
    setProgress(progress - 100);
    console.log(selectedDropDownVacancy.title);
  }, [isAdded]);

  return (
    <div className={togglingButton.container}>
      {!isAdded ? (
        <Button
          type="button"
          className={togglingButton.addButton}
          variant="contained"
          onClick={toggleState}
          fullWidth={true}
        >
          Добавить
        </Button>
      ) : (
        <Button
          type="button"
          className={togglingButton.deleteButton}
          variant="outlined"
          onClick={toggleState}
          fullWidth={true}
        >
          Удалить из списка
        </Button>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <div className={togglingButton.snackBar}>
          <div className={togglingButton.snackContent}>
            <div className={togglingButton.snackImg}></div>
            <div className={togglingButton.snackMessage}>
              <p className={togglingButton.snackTitle}>
                {!selectedDropDownVacancy.id
                  ? "Выберите вакансию"
                  : snackbarMsg(isAdded)}
              </p>
              <p className={togglingButton.snackTarget}>
                {selectedDropDownVacancy.title}
              </p>
            </div>
          </div>
          <BorderLinearProgress
            sx={{ width: "100%" }}
            variant="determinate"
            value={progress}
          />
        </div>
      </Snackbar>
    </div>
  );
};
