export type DropDownitem = {
  value: string;
  label: string;
};

export const experienceDropDown: Array<DropDownitem> = [
  {
    value: "noExperience",
    label: "Нет опыта",
  },
  {
    value: "1to3",
    label: "От 1 года до 3 лет",
  },
  {
    value: "3to6",
    label: "От 3 до 6 лет",
  },
  {
    value: "more6",
    label: "Больше 6 лет",
  },
];

export const languagesDropDown: Array<DropDownitem> = [
  {
    value: "english",
    label: "Английский язык",
  },
  {
    value: "german",
    label: "Немецкий язык",
  },
  {
    value: "french",
    label: "Французский язык",
  },
  {
    value: "chinese",
    label: "Китайский язык",
  },
];

export const languageLevelDropDown: Array<DropDownitem> = [
  {
    value: "a1",
    label: "A1 (Базовый)",
  },
  {
    value: "a2",
    label: "A2 (Ниже среднего)",
  },
  {
    value: "b1",
    label: "B1 (Средний)",
  },
  {
    value: "b2",
    label: "B2 (Выше среднего)",
  },
  {
    value: "c1",
    label: "C1 (Продвинутый)",
  },
  {
    value: "c2",
    label: "C2 (Носитель языка)",
  },
];

export const currencyDropDown: Array<DropDownitem> = [
  {
    value: "RUB",
    label: "\u20bd Рубль",
  },
];

export const typeOfWorkDropDown: Array<DropDownitem> = [
  {
    value: "full",
    label: "Полная занятость",
  },
  {
    value: "partTime",
    label: "Частичная занятость",
  },
  {
    value: "project",
    label: "Проектная занятость",
  },
  {
    value: "internship",
    label: "Стажировка",
  },
];

export const workHoursDropDown: Array<DropDownitem> = [
  {
    value: "full",
    label: "Полный день",
  },
  {
    value: "hybrid",
    label: "Гибрид",
  },
  {
    value: "remote",
    label: "Удаленная работа",
  },
  {
    value: "flexible",
    label: "Гибкий график",
  },
];

export const gradeDropDown: Array<DropDownitem> = [
  {
    value: "junior",
    label: "Junior",
  },
  {
    value: "middle",
    label: "Middle",
  },
  {
    value: "middlePlus",
    label: "Middle +",
  },
  {
    value: "senior",
    label: "Senior",
  },
];
