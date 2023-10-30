import * as yup from "yup";

export const vacancySchema = yup.object({
  name: yup.string().required("Поле обязательное."),
  experience: yup.string().required("Поле обязательное."),
  city: yup.number().required("Поле обязательное."),
  grade: yup.string().required("Поле обязательное."),
  languade: yup.number().required("Поле обязательное."),
  languageLevel: yup.string().required("Поле обязательное."),
  salaryFrom: yup
    .number()
    .typeError("Введите число.")
    .required("Поле обязательное."),
  salaryTo: yup
    .number()
    .typeError("Введите число.")
    .required("Поле обязательное."),
  currency: yup.string().required("Поле обязательное."),
  typeOfWork: yup.string().required("Поле обязательное."),
  workHours: yup.string().required("Поле обязательное."),
  isRemote: yup.boolean(),
  aboutVacancy: yup.string().required("Поле обязательное."),
  duty: yup.string().required("Поле обязательное."),
  requirmentsMandatory: yup.string().required("Поле обязательное."),
  requirmentsOptional: yup.string().required("Поле обязательное."),
  workConditions: yup.string().required("Поле обязательное."),
  selectionStages: yup.string().required("Поле обязательное."),
});
