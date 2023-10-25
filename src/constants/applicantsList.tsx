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
      "https://s1.1zoom.ru/big3/241/431666-Kysb.jpg",
    isWinner: false,
    city: "Санкт-Петербург",
    age: 24,
    responses: 40,
    completedTestTasks: 14,
    interviews: 10,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный"
  },
  {
    firstName: "Анна",
    lastName: "Короткова",
    avatar:
      "https://s1.1zoom.ru/big3/241/431666-Kysb.jpg",
    isWinner: false,
    city: "Санкт-Петербург",
    age: 24,
    responses: 9,
    completedTestTasks: 14,
    interviews: 10,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный"
  },
  {
    firstName: "Анна",
    lastName: "Короткова",
    avatar:
      "https://s1.1zoom.ru/big3/241/431666-Kysb.jpg",
    isWinner: true,
    city: "Санкт-Петербург",
    age: 24,
    responses: 40,
    completedTestTasks: 14,
    interviews: 10,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный"
  },
  {
    firstName: "Анна",
    lastName: "Короткова",
    avatar:
      "https://s1.1zoom.ru/big3/241/431666-Kysb.jpg",
    isWinner: true,
    city: "Санкт-Петербург",
    age: 24,
    responses: 40,
    completedTestTasks: 14,
    interviews: 10,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный"
  },
  {
    firstName: "Анна",
    lastName: "Короткова",
    avatar:
      "https://s1.1zoom.ru/big3/241/431666-Kysb.jpg",
    isWinner: true,
    city: "Санкт-Петербург",
    age: 24,
    responses: 40,
    completedTestTasks: 14,
    interviews: 10,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный"
  },
];
