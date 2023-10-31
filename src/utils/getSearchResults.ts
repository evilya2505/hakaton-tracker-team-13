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
  query = replacer(query).toLowerCase();

  let results: Array<TApplicant>;

  results = applicants.filter((applicant) => {
    if (applicant.hasOwnProperty("first_name")) {
      const name = applicant.first_name.toString().toLowerCase();
      if (applicant.hasOwnProperty("first_name")) {
        const surname = applicant.last_name.toString().toLowerCase();
        if (name.includes(query) || surname.includes(query)) {
          return true;
        }
      }
    }

    return false;
  });

  return results;
};
