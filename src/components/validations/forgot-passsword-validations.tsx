import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Неверный формат email.")
    .required("Поле обязательное."),
});
