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

export type TAwardsProps = {
  isWinner: boolean;
  more10Responses: boolean;
};

export type TWorkExp = {
  workStart: Date; // начало работы
  workEnd: Date; // конец работы
  companyName: string; // название компании
  position: string; // должность
  resp: string; // обязанности
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
  workExpirience: Array<TWorkExp>; // массив из объектов мест работы            ! не приходит (смотреть выше тип TWorkExp)
  responseStatus: string; // статус отклика                                     ! не приходит ( очень много полей выбора, Отклик/Кандидат/Собес итд, макет)
  work_format: string; // формат работы: удаленка офис итд
};

export type TLangLevel = {
  language: string;
  level: number;
};

export type TVacancy = {
  author: number; // айди
  title: string; // название вакансии
  city: string; // город
  expirience: string; // опыт работы                            ! не приходит (1-2 года итд, смотреть в макете)
  grade: string; // грейд                                       ! не приходит (Middle итд, макет!)
  language: Array<TLangLevel>; // язык
  min_wage: number; // зп от
  max_wage: number; // зп до
  workFormat: string; // формат работы                          ! не приходит (удаленный, офис итд смотреть в макете)
  schedule: string; // график работы                            ! не приходит (полный день, итд смотреть в макете)
  isRemote: boolean; // чекбокс удаленки                        ! не приходит
  description: string; // о вакансии
  responsibility: string; // обязанности
  requirements: string; // обязательные требования
  optional_requirements: string; // необязательные требования
  conditions: string; // условия работы                          ! не приходит
  selection_stages: string; // этапы отбора
  is_archive: boolean; // добавлена ли в архив
  is_active: boolean; // опубликована (для черновика)
  created: Date; // дата публикации
};
