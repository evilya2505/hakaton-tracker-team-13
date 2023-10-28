export type vacancy = {
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

export type vacanciesList = Array<vacancy>;

export const vacancies: vacanciesList = [
  {
    title: "Frontend-разработчик",
    city: "Москва",
    expirience: 1,
    grade: "Junior",
    lang: "Английский",
    langLevel: "B2",
    salaryFrom: 50000,
    salaryTo: 100000,
    workFormat: "удаленный",
    schedule: "5/2",
    isRemote: true,
    about: "о вакансии",
    resp: "обязанности",
    reqsObl: "обязательные требования",
    reqsOpt: "необязательные требования",
    conditions: "условия",
    stages: "этапы отбора",
    archive: false,
    pubDate: new Date(),
  },
  {
    title: "UX/UI-дизайнер",
    city: "Санкт-Петербург",
    expirience: 2,
    grade: "Middle",
    lang: "Английский",
    langLevel: "B1",
    salaryFrom: 100000,
    salaryTo: 200000,
    workFormat: "удаленный",
    schedule: "5/2",
    isRemote: true,
    about: "о вакансии",
    resp: "обязанности",
    reqsObl: "обязательные требования",
    reqsOpt: "необязательные требования",
    conditions: "условия",
    stages: "этапы отбора",
    archive: false,
    pubDate: new Date(),
  },
  {
    title: "Frontend-разработчик",
    city: "Москва",
    expirience: 3,
    grade: "Junior",
    lang: "Английский",
    langLevel: "B2",
    salaryFrom: 50000,
    salaryTo: 100000,
    workFormat: "удаленный",
    schedule: "5/2",
    isRemote: true,
    about: "о вакансии",
    resp: "обязанности",
    reqsObl: "обязательные требования",
    reqsOpt: "необязательные требования",
    conditions: "условия",
    stages: "этапы отбора",
    archive: false,
    pubDate: new Date(),
  },
];
