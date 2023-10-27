import togglingButton from "./index.module.css";
import { SyntheticEvent, useState } from "react";
import Button from "@mui/material/Button";

export const TogglingButton = () => {
  const [isAdded, setIsAdded] = useState(false);
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
        >
          Добавить
        </Button>
      ) : (
        <Button
          type="button"
          className={togglingButton.deleteButton}
          variant="contained"
          onClick={toggleState}
        >
          Добавлен
        </Button>
      )}
    </div>
  );
};
