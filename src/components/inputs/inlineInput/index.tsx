import React from 'react';
import inlineInput from './index.module.css';
import input from '../index.module.css'
import { TextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

const sizes = {
  "default" : '320px',
  "salaryTo" : '153px',
}

interface IInputProps {
  title: string;
  errorMessage: string | undefined;
  register: UseFormRegister<any>;
  id: string;
  type: 'default' | 'salaryTo';
  placeholder: string;
}

export default function InlineInput({placeholder, type, title, errorMessage, register, id }:IInputProps) {
  return (
    <div className={type ===  'default' ? input.inputSection : input.inputSectionSalaryTo}>
    <label htmlFor={id} className={input.label}>
      {title}
    </label>
    <TextField
      error={errorMessage !== undefined}
      type="text"
      {...register(id)}
      sx={{width: sizes[type]}}
      inputProps={{
        style: {
          padding: "8px 12px",
          color: "#1A1B22",
          fontFamily: "YS Text",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
        },
      }}
      className={inlineInput.input}
      placeholder={placeholder}
      id={id}
      variant="outlined"
    />

    <label className={input.error}>
      {errorMessage || " "}
    </label>
  </div>
  )
}