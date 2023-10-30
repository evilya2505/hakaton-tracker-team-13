import togglingButton from "./index.module.css";
import { SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useSelector } from "../../../../../services/hooks";
import mainApi from "../../../../../utils/MainApi";
import { TApplicant, TVacancy } from "../../../../../utils/types";

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
  applicant: TApplicant;
};

export const TogglingButton = ({ applicant }: togglingButtonProps) => {
  const selectedDropDownVacancy = useSelector(
    (state) => state.applicants.selectedDropDownVacancy
  );

  const [openSnackbar, setOpenSnackBar] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isCandidate, setIsCandidate] = useState(false);

  function getApplicantStatus() {
    mainApi
      .getApplicantStatus({
        applicantId: applicant.id,
        vacancyId: selectedDropDownVacancy.id,
      })
      .then((res) => {
        console.log(res);
        if (res.response_status) {
          setIsCandidate(true);
        } else {
          setIsCandidate(false);
        }
        console.log(isCandidate);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (selectedDropDownVacancy.id) {
      getApplicantStatus();
    }
  }, [selectedDropDownVacancy, isCandidate]);

  function toggleState(e: SyntheticEvent) {
    e.stopPropagation();
    if (selectedDropDownVacancy.id) {
      if (!isCandidate) {
        mainApi
          .addApplicantToVacancy({
            applicantId: applicant.id,
            vacancyId: selectedDropDownVacancy.id,
          })
          .then(() => {
            setOpenSnackBar(true);
            setProgress(100);
            setIsCandidate(true);
          })
          .catch((err) => console.log(err));
      } else {
        mainApi
          .deleteApplicantFromVacancy({
            applicantId: applicant.id,
            vacancyId: selectedDropDownVacancy.id,
          })
          .then(() => {
            setOpenSnackBar(true);
            setProgress(100);
            setIsCandidate(false);
          })
          .catch((err) => console.log(err));
      }
    } else {
      setOpenSnackBar(true);
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
  }, [isCandidate]);

  return (
    <div className={togglingButton.container}>
      {!isCandidate ? (
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
                  : snackbarMsg(isCandidate)}
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
