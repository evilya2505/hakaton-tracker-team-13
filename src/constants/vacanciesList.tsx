export type vacancy = {
  title: string; // название вакансии
  city: string; // город
  expirience: string; // опыт работы
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
};

export type vacanciesList = Array<vacancy>;

export const vacancies: vacanciesList = [{
    title: 'Frontend-разработчик',
    city: 'Москва',
    expirience: '1 год',
    grade: 'Junior',
    lang: 'Английский',
    langLevel: 'B2',
    salaryFrom: 50000,
    salaryTo: 100000,
    workFormat: 'удаленный',
    schedule: '5/2',
    isRemote: true,
    about: 'о вакансии',
    resp: 'обязанности',
    reqsObl: 'обязательные требования',
    reqsOpt: 'необязательные требования',
    conditions: 'условия',
    stages: 'этапы отбора'
}];
