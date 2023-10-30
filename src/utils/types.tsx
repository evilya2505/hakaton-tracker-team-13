export type ForgotPasswordFormValues = {
  email: string;
};

export type TCity = {
  id: number;
  name: string;
  region: string;
  country: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type FilterApplicantsValues = {
  isProgramming?: boolean;
  isDataAnalysis?: boolean;
  isDesign?: boolean;
  isManagment?: boolean;
  isMarketing?: boolean;
  FD?: boolean;
  HB?: boolean;
  RM?: boolean;
}

export type AddVacancyFormValues = {
  name: string;
  experience: string;
  city: number;
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

export type TAwardsProps = {
  isWinner: boolean;
  more10Responses: boolean;
};

export type TWorkExp = {
  date_start: Date; // начало работы
  date_end: Date; // конец работы
  company: string; // название компании
  title: string; // должность
  description: string; // обязанности
};

export type TApplicant = {
  id: number; // айди
  first_name: string; // имя
  last_name: string; // фамилия
  avatar_url: string; // ссылка
  is_winner: true; // победитель хакатона?
  city: string; // город
  age: number; // возраст
  course: string; // курс
  graduation_date: Date; // дата выпуска
  schedule: string; // график работы
  edu_status: string; // статус Студент/Выпускник
  response_count: number; // кол-во откликов
  test_task_count: number; // кол-во тестовых
  interview_count: number; // кол-во интервью
  work_status: string; // опыт работы
  // new
  grade: string;
  salary: number; // зп
  contacts: string; // контакты
  optional_description: string; // о себе
  edu_Status: string; // учебный статус
  // не приходят данные
  expirience: Array<TWorkExp>; // массив из объектов мест работы            ! не приходит (смотреть выше тип TWorkExp)
  response_status: Array<number>; // статус отклика                                     ! не приходит ( очень много полей выбора, Отклик/Кандидат/Собес итд, макет)
  work_format: string; // формат работы: удаленка офис итд
};

export type TLangLevel = {
  id: number;
  language: string;
  level: number;
};

export type TVacancy = {
  author?: number;
  id?: number; // айди
  title: string; // название вакансии
  city?: number; // город
  expirience: string; // опыт работы
  grade: string; // грейд
  language: Array<TLangLevel>; // язык
  min_wage: number; // зп от
  max_wage: number; // зп до
  work_format: string; // формат работы                          ! массив
  schedule?: string; // график работы                            ! не приходит (полный день, итд смотреть в макете)
  isRemote?: boolean; // чекбокс удаленки                        ! не приходит
  description: string; // о вакансии
  responsibility: string; // обязанности
  requirements: string; // обязательные требования
  optional_requirements: string; // необязательные требования
  conditions: string; // условия работы
  selection_stages: string; // этапы отбора
  is_archive: boolean; // добавлена ли в архив
  is_active: boolean; // опубликована (для черновика)
  created?: Date; // дата публикации
  applicants?: Array<TApplicant>;
  currency?: string;
};
