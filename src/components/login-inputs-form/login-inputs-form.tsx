import React from "react";
import loginInputsForm from "./login-inputs-form.module.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SubmitButton from "../submit-button/submit-button";
import { LoginFormValues } from "../../utils/types";
import { loginSchema } from "../../validations/login-validations";

const LoginInputsForm: React.FC<{}> = (): JSX.Element => {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form data submitted:", data);
  };

  return (
    <form
      className={loginInputsForm.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <fieldset className={loginInputsForm.fieldset}>
        <p className={loginInputsForm.text}>Войти в аккаунт</p>
        <TextField
          fullWidth
          className={loginInputsForm.input}
          id="email"
          size="small"
          label="Email"
          type="text"
          variant="outlined"
          error={errors.email?.message !== undefined}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <TextField
          fullWidth
          className={loginInputsForm.input}
          size="small"
          id="password"
          label="Пароль"
          type="password"
          variant="outlined"
          error={errors.password?.message !== undefined}
          helperText={errors.password?.message}
          {...register("password")}
        />
        <Link
          to="/forgot-password"
          className={loginInputsForm.additionalButton}
        >
          Не помню пароль
        </Link>

        <SubmitButton
          isFullWidth={true}
          isDisabled={
            !(formState.dirtyFields.email && formState.dirtyFields.password)
          }
          text={"Войти"}
        />
      </fieldset>
    </form>
  );
};

export default LoginInputsForm;
