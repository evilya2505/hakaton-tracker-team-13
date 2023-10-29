import togglingButton from "./index.module.css";
import { SetStateAction, SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import { Dispatch } from "react";
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'var(--main-blue)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    backgroundColor: '#ACCCFF',
  },
}));

type togglingButtonProps = {
  isAdded: boolean;
  setIsAdded: Dispatch<SetStateAction<boolean>>;
};

export const TogglingButton = ({ isAdded, setIsAdded }: togglingButtonProps) => {
  const [open, setOpen] = React.useState(false);

  function toggleState(e: SyntheticEvent) {
    if (!isAdded) {
      setOpen(true);
      setProgress(100)
    };
    e.stopPropagation();
    setIsAdded(!isAdded);
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    setProgress(progress - 10);
  }, [progress]);

  return (
    <div className={togglingButton.container}>
      {isAdded === false ? (
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
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <div className={togglingButton.snackBar}>
          <div className={togglingButton.snackContent}>
            <div className={togglingButton.snackImg}></div>
            <div className={togglingButton.snackMessage}>
              <p className={togglingButton.snackTitle}>Кандидат добавлен</p>
              <p className={togglingButton.snackTarget}>Вакансия Дизайнер мобильных приложений</p>
            </div>
          </div>
          <BorderLinearProgress
            sx={{ width: '100%' }}
            variant="determinate"
            value={progress}
          />
        </div>
      </Snackbar>
    </div>
  );
};
