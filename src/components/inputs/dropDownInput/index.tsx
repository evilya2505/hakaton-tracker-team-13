import React, { ReactNode } from 'react';
import input from '../index.module.css'
import { TextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

const sizes = {
  "default" : '320px',
  'currency' : "148px",
}

interface IDropDownInputProps {
    errorMessage: string | undefined;
    title: string;
    register:UseFormRegister<any>;
    id: string;
    children: ReactNode;
    defaultValue: string | number;
    type: "default" | 'currency';
}

export default function DropDownInput({type, defaultValue, errorMessage, children, title, register, id}:IDropDownInputProps) {
  return (
    <div className={input.inputSection}>
    <label htmlFor={id} className={input.label}>
      {title}
    </label>
    <TextField
      {...register(id)}
      error={errorMessage !== undefined}
      sx={{
          width: sizes[type],
        ".MuiOutlinedInput-input": {
          padding: "8px 12px",
          color: "#1A1B22",
          fontFamily: "YS Text",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
        },
      }}
      id="city"
      defaultValue={defaultValue}
      select
    >
      {children}
    </TextField>

    <label className={input.error}>
      {errorMessage || " "}
    </label>
  </div>
  )
}