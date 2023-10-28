import togglingButton from "./index.module.css";
import { SetStateAction, SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import { Dispatch } from "react";

type togglingButtonProps = {
  isAdded: boolean;
  setIsAdded: Dispatch<SetStateAction<boolean>>;
};

export const TogglingButton = ({ isAdded, setIsAdded } : togglingButtonProps) => {
  function toggleState(e: SyntheticEvent) {
    e.stopPropagation();
    setIsAdded(!isAdded);
  }
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
    </div>
  );
};
