import { TCity, TVacancy } from "./types";

export interface applicantInVacancyProps {
  applicantId: number;
  vacancyId: number | undefined;
  status?: string;
}

class MainApi {
  private _baseUrl: string;
  private _headers: Record<string, string>;
  constructor(options: { baseUrl: string; headers: Record<string, string> }) {
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
  getFilteresApplicants(filters: { key: string; value: string }[]) {
    let filter: string = "";
    for (let i = 0; i < filters.length; i++) {
      if (i !== filters.length - 1) {
        filter += `${filters[i].key}=${filters[i].value}&`;
      } else {
        filter += `${filters[i].key}=${filters[i].value}`;
      }
    }
    return fetch(`${this._baseUrl}/applicants/?${filter}`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    }).then((res) => this._getRequestResult(res));
  }

  // ВАКАНСИИ:

  // получить отфильтрованные данные кандидатов в вакансии
  getFilteredVacabcyApplicants(
    filters: { key: string; value: string }[],
    vacancyId: number | undefined
  ) {
    let filter: string = "";
    for (let i = 0; i < filters.length; i++) {
      if (i !== filters.length - 1) {
        filter += `${filters[i].key}=${filters[i].value}&`;
      } else {
        filter += `${filters[i].key}=${filters[i].value}`;
      }
    }
    console.log(`${this._baseUrl}/vacancies/${vacancyId}/responses/?${filter}`);
    return fetch(
      `${this._baseUrl}/vacancies/${vacancyId}/responses/?${filter}`,
      {
        method: "GET",
        headers: {
          ...this._headers,
        },
      }
    ).then((res) => this._getRequestResult(res));
  }

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

  // добавление вакансии
  addVacancy(vacancy: TVacancy) {
    return fetch(`${this._baseUrl}/vacancies/`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        created: vacancy.created?.toDateString(),
        ...vacancy,
      }),
    }).then((res) => this._getRequestResult(res));
  }

  // редактировать вакансию
  partlyEditVacancy(vacancy: TVacancy, id: number | undefined) {
    console.log(JSON.stringify(vacancy), `${this._baseUrl}/vacancies/${id}/`);

    return fetch(`${this._baseUrl}/vacancies/${id}/`, {
      method: "PATCH",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(vacancy),
    }).then((res) => this._getRequestResult(res));
  }

  // удалить вакансию
  deleteVacancy(vacancyId: number) {
    return fetch(`${this._baseUrl}/vacancies/${vacancyId}/applicants/`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }

  // ОТКЛИКИ

  // получить массив соискателей, добавленных в вакансию
  getVacancysApplicants(vacancyId: number | undefined) {
    return fetch(`${this._baseUrl}/vacancies/${vacancyId}/responses/`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    }).then((res) => this._getRequestResult(res));
  }

  // добавить соискателя в вакансию

  addApplicantToVacancy({ applicantId, vacancyId }: applicantInVacancyProps) {
    return fetch(`${this._baseUrl}/vacancies/${vacancyId}/responses/`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ applicant: applicantId, vacancy: vacancyId }),
    }).then((res) => this._getRequestResult(res));
  }

  // получить статус соискателя в вакансии

  getApplicantStatus({ applicantId, vacancyId }: applicantInVacancyProps) {
    return fetch(
      `${this._baseUrl}/vacancies/${vacancyId}/responses/${applicantId}/`,
      {
        method: "GET",
        headers: {
          ...this._headers,
        },
      }
    ).then((res) => this._getRequestResult(res));
  }

  // обновить статус соискателя в вакансии

  updateApplicantStatus({
    applicantId,
    vacancyId,
    status,
  }: applicantInVacancyProps) {
    console.log(
      JSON.stringify({
        applicant: applicantId,
        vacancy: vacancyId,
        status: status,
      })
    );
    return fetch(
      `${this._baseUrl}/vacancies/${vacancyId}/responses/${applicantId}/`,
      {
        method: "PATCH",
        headers: {
          ...this._headers,
        },
        body: JSON.stringify({
          applicant: applicantId,
          vacancy: vacancyId,
          status: status,
        }),
      }
    ).then((res) => this._getRequestResult(res));
  }

  // удаляет соискателя из вакансии

  deleteApplicantFromVacancy({
    applicantId,
    vacancyId,
  }: applicantInVacancyProps) {
    return fetch(
      `${this._baseUrl}/vacancies/${vacancyId}/responses/${applicantId}/`,
      {
        method: "DELETE",
        headers: {
          ...this._headers,
        },
      }
    ).then((res) => console.log(res));
  }

  getCityById(cityId: number) {
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

  getLanguages() {
    return fetch(`${this._baseUrl}/languages/`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer `,
      },
    }).then((res) => this._getRequestResult(res));
  }
}

// Создание экземпляра класса Api
const mainApi = new MainApi({
  baseUrl: "https://aboba.pro/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
