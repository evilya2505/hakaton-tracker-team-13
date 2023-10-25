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
  graduationDate: string; // дата окончания (строка формата 'апрель 2023')
  workFormat: string; // формат работы
};

export type applicantsList = Array<applicant>;

export const applicants: applicantsList = [
  {
    firstName: "Анна",
    lastName: "Короткова",
    avatar:
      "https://images.unsplash.com/photo-1693438672953-409b661134fd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: false,
    city: "Санкт-Петербург",
    age: 24,
    responses: 40,
    completedTestTasks: 14,
    interviews: 10,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный",
  },
  {
    firstName: "Алия",
    lastName: "Шархимуллина",
    avatar:
      "https://images.unsplash.com/photo-1697472106815-829bad01f7b8?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: false,
    city: "Казань",
    age: 28,
    responses: 1,
    completedTestTasks: 10,
    interviews: 9,
    course: "Web-разработчик",
    graduationDate: "июнь 2022",
    workFormat: "офис",
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    avatar: "https://images.unsplash.com/photo-1696887350319-86341eda4b71?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: true,
    city: "Москва",
    age: 35,
    responses: 40,
    completedTestTasks: 14,
    interviews: 10,
    course: "Python-разработчик",
    graduationDate: "август 2023",
    workFormat: "удаленный",
  },
  {
    firstName: "Петр",
    lastName: "Петров",
    avatar: "https://images.unsplash.com/photo-1697472925037-e38438b132b0?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: false,
    city: "Барнаул",
    age: 30,
    responses: 35,
    completedTestTasks: 20,
    interviews: 5,
    course: "Дизайнер интерфейсов",
    graduationDate: "февраль 2023",
    workFormat: "удаленный",
  },
  {
    firstName: "Александра",
    lastName: "Александрова",
    avatar: "https://images.unsplash.com/photo-1689193504709-2ccf8bf64be1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: true,
    city: "Санкт-Петербург",
    age: 24,
    responses: 40,
    completedTestTasks: 14,
    interviews: 10,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный",
  },
];
