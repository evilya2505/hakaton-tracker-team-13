export type ForgotPasswordFormValues = {
  email: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type AddVacancyFormValues = {
  name: string;
  experience: string;
  city: string;
  grade: string;
  languade: string;
  languageLevel: string;
  salaryFrom: number;
  salaryTo: number;
  currency: string;
  typeOfWork: string;
  workHours: string;
  isRemote?: boolean;
  aboutVacancy: string;
  duty: string;
  requirmentsMandatory: string;
  requirmentsOptional: string;
  workConditions: string;
  selectionStages: string;
}