import { TCity, TVacancy } from "./types";

interface TOptions {
  baseUrl: string;
  headers: Headers;
}

class MainApi {
  _baseUrl: string;
  _headers: Headers;
  constructor(options: TOptions) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // проверка ответа сервера
  _getRequestResult(res: Response) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // КАНДИДАТЫ:

  // получить общий массив всех кандидатов
  getApplicants() {
    return fetch(`${this._baseUrl}/applicants/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }

  // получить инфо о кандидате по его айди
  getApplicant(vacancyId: number) {
    return fetch(`${this._baseUrl}/applicants/${vacancyId}/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }

    // получить отфильтрованные данные кандидатов
    getFilteresApplicants(filters: {key: string, value: string}[]){
      let filter:string = "";
      for (let i = 0; i < filters.length ; i++) {
        if (i !== filters.length - 1) {
          filter += `${filters[i].key}=${filters[i].value}&`;
        } else {
          filter += `${filters[i].key}=${filters[i].value}`;
        }

      }
      console.log(`${this._baseUrl}/applicants/?${filter}`)
      return fetch(`${this._baseUrl}/applicants/?${filter}`, {
        method: "GET",
        headers: {
          ...this._headers,
        },
      }).then((res) => this._getRequestResult(res));
    }


  // ВАКАНСИИ:

  // получить массив вакансий компании
  getVacancies() {
    return fetch(`${this._baseUrl}/vacancies/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }

  // получить данные вакансии по ее айди
  getVacancy(vacancyId: number) {
    return fetch(`${this._baseUrl}/vacancies/${vacancyId}/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }

  // получить массив соискателей, добавленных в вакансию
  getVacancysApplicants(vacancyId: number | undefined) {
    return fetch(`${this._baseUrl}/vacancies/${vacancyId}/responses/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }

  // добавить вакансию
  addVacancy(vacancy: TVacancy) {
    console.log(JSON.stringify({ data: {created: vacancy.created?.toDateString(), ...vacancy}}));
    // return fetch(`${this._baseUrl}/vacancies/`, {
    //   method: "POST",
    //   headers: {
    //     ...this._headers,
    //     Authorization: `Bearer `,
    //     body: JSON.stringify({
    //       data: vacancy,
    //     }),
    //   },
    // }).then((res) => this._getRequestResult(res));
  }

  // редактировать вакансию
  partlyEditVacancy(vacancy: TVacancy) {
    console.log(JSON.stringify({ data: {created: vacancy.created?.toDateString(), ...vacancy}}));
    // return fetch(`${this._baseUrl}/vacancies/${vacancy.author}/`, {
    //   method: "PATCH",
    //   headers: {
    //     ...this._headers,
    //     Authorization: `Bearer `,
    //     body: JSON.stringify({
    //       data: vacancy,
    //     }),
    //   },
    // }).then((res) => this._getRequestResult(res));
  }

  // удалить вакансию
  deleteVacancy(vacancyId: number) {
    return fetch(`${this._baseUrl}/vacancies/${vacancyId}/applicants`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }

  // добавляет кандидата в вакансию
  addApplicantToVacancy(applicantId: number, vacancyId: number) {
    return fetch(`${this._baseUrl}/vacancies/${vacancyId}/applicants/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
      body: JSON.stringify({
        applicant: applicantId,
      }),
    }).then((res) => this._getRequestResult(res));
  }

  // удаляет кандидата из вакансии
  deleteApplicantFromVacancy(applicantId: number, vacancyId: number) {
    return fetch(`${this._baseUrl}/vacancies/${vacancyId}/applicants/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
      body: JSON.stringify({
        applicant: applicantId,
      }),
    }).then((res) => this._getRequestResult(res));
  }

  getCityById(cityId: number | undefined | TCity) {
    return fetch(`${this._baseUrl}/cities/${cityId}/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }

  getCities() {
    return fetch(`${this._baseUrl}/cities/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }
}

// инициализация headers
const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Content-Type", "application/json");

// Создание экземпляра класса Api
const mainApi = new MainApi({
  baseUrl: "http://130.193.38.180/api",
  headers: requestHeaders,
});

export default mainApi;
