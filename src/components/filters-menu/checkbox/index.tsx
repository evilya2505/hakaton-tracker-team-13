import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface ICheckboxCustomizedProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}

export default function CheckboxCustomized({isChecked = false, handleCheckboxChange, id, label, register}:ICheckboxCustomizedProps) {
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
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 30,
              width: "0.8em",
              height: "0.8em",
            },
          }}
        />
      }
      label={label}
    />
  );
};
