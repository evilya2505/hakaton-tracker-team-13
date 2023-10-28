import * as React from "react";
import applicantCompareCard from "./index.module.css";
import { Avatar, Chip } from "@mui/material";

export default function ApplicantCompareCard() {
  return (
    <section className={applicantCompareCard.applicant}>
      <div className={applicantCompareCard.mainInfo}>
        <div className={applicantCompareCard.personalInfoContainer}>
          {/* <img className={mainInfoModal.avataer} alt="изображение студента" /> */}
          <Avatar className={applicantCompareCard.avataer} />
          <div className={applicantCompareCard.personalInfo}>
            <p className={applicantCompareCard.fullName}>Андрей Ларионов</p>
            <p className={applicantCompareCard.personalInfoText}>
              05.11.1995, 27 лет
            </p>
            <p className={applicantCompareCard.personalInfoText}>
              Дизайнер интерфейсов
            </p>
            <p className={applicantCompareCard.personalInfoText}>
              Junior, Москва
            </p>
          </div>
        </div>
        <div className={applicantCompareCard.criteria}>
          <p className={applicantCompareCard.jobStatus}>Активно ищет работу</p>
          <p className={applicantCompareCard.salary}>От 50000 ₽</p>
        </div>
      </div>
      <div className={applicantCompareCard.section}>
        <p className={applicantCompareCard.text}>
          <span className={applicantCompareCard.courseTitle}>Курс: </span>{" "}
          Дизайнер интерфейсов
        </p>
        <p className={applicantCompareCard.text}>
          <span className={applicantCompareCard.courseTitle}>
            Время окончания:{" "}
          </span>
          июнь 2023
        </p>
      </div>
      <div className={applicantCompareCard.section}>
        <h2 className={applicantCompareCard.sectionTitle}>Ключевые навыки</h2>
        <ul className={applicantCompareCard.skillsList}>
          <li className={applicantCompareCard.skill}>
            <Chip className={applicantCompareCard.chip} label="Figma" />
          </li>
          <li className={applicantCompareCard.skill}>
            <Chip className={applicantCompareCard.chip} label="JTBD" />
          </li>
          <li className={applicantCompareCard.skill}>
            <Chip className={applicantCompareCard.chip} label="Photoshop" />
          </li>
          <li className={applicantCompareCard.skill}>
            <Chip
              className={applicantCompareCard.chip}
              label="Английский язык C1"
            />
          </li>
          <li className={applicantCompareCard.skill}>
            <Chip className={applicantCompareCard.chip} label="CJM" />
          </li>
          <li className={applicantCompareCard.skill}>
            <Chip className={applicantCompareCard.chip} label="User Story" />
          </li>
          <li className={applicantCompareCard.skill}>
            <Chip
              className={applicantCompareCard.chip}
              label="Английский язык C1"
            />
          </li>
        </ul>
      </div>
      <div className={applicantCompareCard.section}>
        <h2 className={applicantCompareCard.sectionTitle}>Образование</h2>
        <p className={applicantCompareCard.educationText}>
          сентябрь 2016 - июль 2020
        </p>
        <p className={applicantCompareCard.text}>
          Университет им. Иванова, бакалавр коммерции
        </p>
      </div>
      <div className={applicantCompareCard.section}>
        <h2 className={applicantCompareCard.sectionTitle}>О себе</h2>
        <p className={applicantCompareCard.text}>
          Я обладаю хорошим вкусом, чувством композиции и цвета, которые
          позволяют мне создавать эстетически приятные и функциональные
          интерфейсы. Я умею анализировать требования пользователей и превращать
          их в концепции дизайна, которые соответствуют их потребностям и целям.
        </p>
      </div>
    </section>
  );
}
