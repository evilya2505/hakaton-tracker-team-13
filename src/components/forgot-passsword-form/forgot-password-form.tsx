import React from "react";
import forgotPasswordForm from "./forgot-password-form.module.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SubmitButton from "../submit-button/submit-button";
import { forgotPasswordSchema } from "../validations/forgot-passsword-validations";
import { ForgotPasswordFormValues } from "../../utils/types";

const LoginInputsForm: React.FC<{}> = (): JSX.Element => {
  const navigate = useNavigate();

  const form = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: ForgotPasswordFormValues) => {
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

        <SubmitButton
          isDisabled={!formState.dirtyFields.email}
          text={"Продолжить"}
        />
      </fieldset>
    </form>
  );
};

export default LoginInputsForm;
