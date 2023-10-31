import { FormControlLabel } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import Checkbox from "@mui/joy/Checkbox";

interface ICheckboxCustomizedProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  disabled?: boolean;
}

export default function CheckboxCustomized({
  isChecked = false,
  handleCheckboxChange,
  id,
  label,
  register,
  disabled,
}: ICheckboxCustomizedProps) {
  return (
    <FormControlLabel
      sx={{
        ".MuiFormControlLabel-root": {
          marginBottom: "8px",
          color: "#1A1B22",
          fontFamily: "YS Text",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
        },
        ".MuiCheckbox-root": {
          padding: "0 10px 0 0",
        },
      }}
      control={
        <Checkbox
          {...register(id)}
          checked={isChecked}
          onChange={(e) => handleCheckboxChange(e)}
          variant="outlined"
          size="lg"
          disabled={disabled}
        />
      }
      label={label}
    />
  );
}
