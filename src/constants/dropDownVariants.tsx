export type DropDownitem = {
  value: string;
  label: string;
};

export const experienceDropDown: Array<DropDownitem> = [
  {
    value: "LOW",
    label: "Нет опыта",
  },
  {
    value: "MED",
    label: "От 1 года до 3 лет",
  },
  {
    value: "HI",
    label: "От 3 до 6 лет",
  },
  {
    value: "HIP",
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
    value: "FD",
    label: "Полный день",
  },
  {
    value: "HB",
    label: "Гибрид",
  },
  {
    value: "RM",
    label: "Удаленная работа",
  },
  {
    value: "FX",
    label: "Гибкий график",
  },
];

export const gradeDropDown: Array<DropDownitem> = [
  {
    value: "IN",
    label: "Intern",
  },
  {
    value: "JR",
    label: "Junior",
  },
  {
    value: "MD",
    label: "Middle",
  },
  {
    value: "SR",
    label: "Senior",
  },
];
