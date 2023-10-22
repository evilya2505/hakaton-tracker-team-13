import React from "react";
import loginInputsForm from "./login-inputs-form.module.css";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Неверный формат email.")
    .required("Поле обязательное."),
  password: yup.string().required("Поле обязательное."),
});

const LoginInputsForm: React.FC<{}> = (): JSX.Element => {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: LoginFormValues) => {
    console.log(errors.email?.message);
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
        <Button
          type="submit"
          fullWidth
          className={loginInputsForm["button"]}
          variant="contained"
          disabled={
            !(formState.dirtyFields.email && formState.dirtyFields.password)
          }
        >
          Войти
        </Button>
      </fieldset>
    </form>
  );
};

export default LoginInputsForm;
