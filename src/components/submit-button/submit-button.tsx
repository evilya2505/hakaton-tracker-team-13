import React from "react";
import { Button } from "@mui/material";
import button from "./submit-button.module.css";

interface ISubmitButtonProps {
  isDisabled: boolean;
  text: string;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  isDisabled,
  text,
}): JSX.Element => {
  return (
    <Button
      type="submit"
      fullWidth
      className={button["button"]}
      variant="contained"
      disabled={isDisabled}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
