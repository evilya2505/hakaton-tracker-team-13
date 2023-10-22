import React from "react";
import forgotPasswordForm from "./forgot-password-form.module.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Неверный формат email.")
    .required("Поле обязательное."),
});

const LoginInputsForm: React.FC<{}> = (): JSX.Element => {
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form data submitted:", data);
    navigate("/forgot-password/success");
  };

  return (
    <form
      className={forgotPasswordForm.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <fieldset className={forgotPasswordForm.fieldset}>
        <p className={forgotPasswordForm.text}>
          Введите адрес электронной почты
        </p>
        <TextField
          fullWidth
          className={forgotPasswordForm.input}
          id="email"
          size="small"
          label="Email"
          type="text"
          variant="outlined"
          error={errors.email?.message !== undefined}
          helperText={errors.email?.message}
          {...register("email")}
        />

        <Button
          type="submit"
          fullWidth
          className={forgotPasswordForm["button"]}
          variant="contained"
          disabled={!formState.dirtyFields.email}
        >
          Продолжить
        </Button>
      </fieldset>
    </form>
  );
};

export default LoginInputsForm;
