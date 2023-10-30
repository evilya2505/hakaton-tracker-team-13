import React from 'react';
import input from '../index.module.css'
import { TextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import multilineInput from './index.module.css';

interface IMultilineInputProps {
    errorMessage: string | undefined;
    title: string;
    register:UseFormRegister<any>;
    id: string;
    defaultValue: string;
}

export default function MultilineInput({defaultValue, errorMessage,title, register, id}:IMultilineInputProps) {
  return (
    <div className={input.inputSection}>
    <label
      htmlFor={id}
      className={input.label}
    >
      {title}
    </label>
    <TextField
      {...register(id)}
      error={errorMessage !== undefined}
      defaultValue={defaultValue}
      className={multilineInput.multiLineInput}
      id={id}
      multiline
      sx={{
        "& .MuiInputBase-root::-webkit-scrollbar": {
          width: "0.1rem",
        },
        "& .MuiInputBase-root::-webkit-scrollbar-thumb": {
          background: "transparent",
        },
        "& .MuiInputBase-root::-webkit-scrollbar-track": {
          background: "transparent",
        },
      }}
      rows={2.9}
      InputProps={{
        style: {
          padding: "10px 12px",
          height: "90px",
          overflowY: "auto",
          color: "#1A1B22",
          fontFamily: "YS Text",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
          textAlign: "left",
        },
      }}
    />
    <label className={input.error}>
      {errorMessage || " "}
    </label>
  </div>
  )
}