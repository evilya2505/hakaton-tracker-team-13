import React from "react";
import loginSelection from "./login-selection.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LoginSelection: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={loginSelection.buttons}>
      <Link className={loginSelection.link} to="/login">
        <Button
          fullWidth
          className={loginSelection["button"]}
          variant="outlined"
        >
          Я выпускник
        </Button>
      </Link>
      <Link className={loginSelection.link} to="company">
        <Button
          fullWidth
          variant="outlined"
          className={loginSelection["button"]}
        >
          Я работодатель
        </Button>
      </Link>
    </div>
  );
};

export default LoginSelection;
