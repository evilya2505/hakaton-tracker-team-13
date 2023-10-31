import { TApplicant } from "./types";

// Удаляет из строки все, кроме букв и цифр, заменяя на пробел ->
// убирает двойные пробелы -> заменяет ё на е -> обрезает пробелы из начала и конца строки

function replacer(query: string) {
  if (query) {
    return query
      .replace(/[^a-zа-яё0-9\s]/gi, "")
      .replace(/\s+/g, " ")
      .replace(/ё/g, "е")
      .trim();
  } else {
    return "";
  }
}

// принимает строку из инпута и текущий массив кандидатов

export const getSearchResults = (
  query: string,
  applicants: Array<TApplicant>
) => {
  // обрабатываем строку запроса
  query = replacer(query).toLowerCase();
  let results: Array<TApplicant | undefined>;

  // фильтруем массив кандидатов
  results = applicants.filter((applicant) => {
    // ищем совпадения в массиве значений всех ключей объекта кандидата
    let values = Object.values(applicant);
    values = values
      .filter((value) => typeof value === "string" || typeof value === "number")
      .map((value) => {
        return value.toString().toLowerCase();
      });
    // оставляем в массиве только те значения, которые совпали с запросом
    values = values.filter((value) => value.toString().includes(query));
    // если массив не пуст, то оставляем кандидата в массиве
    if (values.length > 0) return applicant;
  });
  console.log(results);
  return results;
};
