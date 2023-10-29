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
  studyingStatus: string; // учебный статус
  responseStatus: string; // статус отклика
  workStatus: string; // опыт работы
};

export type TApplicant = {
  id: number;
  first_name: string;
  last_name: string;
  avatar_url: "http://example.com";
  is_winner: true;
  city: string;
  age: number;
  course: string;
  graduation_date: Date;
  schedule: string;
  edu_status: string;
  response_count: number;
  test_task_count: number;
  interview_count: number;
  work_status: string; // опыт работы
  // new
  grade: string;
  salary: number; // зп
  contacts: string; // контакты
  about: string; // о себе
  edu_Status: string; // учебный статус
  // не приходят данные
  workExpirience: Array<workExp>; // массив из объектов мест работы
  responseStatus: string; // статус отклика
  workFormat: string;
};

export type applicantsList = Array<applicant>;

export type TVacancy = {
  author: number;
  title: string; // название вакансии
  city: string; // город
  expirience: number; // опыт работы
  grade: string; // грейд
  lang: string; // язык
  langLevel: string; // уровень владения языком
  salaryFrom: number; // зп от
  salaryTo: number; // зп до
  workFormat: string; // формат работы
  schedule: string; // график работы
  isRemote: boolean; // чекбокс удаленки
  about: string; // о вакансии
  resp: string; // обязанности
  reqsObl: string; // обязательные требования
  reqsOpt: string; // необязательные требования
  conditions: string; // условия работы
  stages: string; // этапы отбора
  // добавила поля
  archive: boolean; // добавлена ли в архив
  pubDate: Date; // дата публикации
};
