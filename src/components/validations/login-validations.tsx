import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Неверный формат email.")
    .required("Поле обязательное."),
  password: yup.string().required("Поле обязательное."),
});
