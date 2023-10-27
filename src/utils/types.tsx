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
};

export type awardsProps = {
  isWinner: boolean;
  more10Responses: boolean;
};

export type workExp = {
  workStart: Date; // начало работы
  workEnd: Date; // конец работы
  companyName: string; // название компании
  position: string; // должность
  resp: string; // обязанности
};

export type applicant = {
  firstName: string; // имя
  lastName: string; // фамилия
  avatar: string; // ссылка на аватар в формате url
  isWinner: boolean; // победитель хакатона?
  city: string; // город
  age: number; // возраст
  responses: number; // длина массива откликов
  completedTestTasks: number; // длина массива тестовых
  interviews: number; // длина массива собеседований
  course: string; // название оконченного курса
  graduationDate: Date; // дата окончания (строка формата 'апрель 2023')
  workFormat: string; // формат работы
  // добавила новые поля
  grade: string; // грейд
  salary: number; // зп
  contacts: string; // контакты
  about: string; // о себе
  workExpirience: Array<workExp>; // массив из объектов мест работы
};

export type applicantsList = Array<applicant>;
