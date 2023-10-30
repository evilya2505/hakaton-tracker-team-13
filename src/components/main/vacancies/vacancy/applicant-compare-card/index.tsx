import * as React from "react";
import applicantCompareCard from "./index.module.css";
import { Avatar, Chip } from "@mui/material";
import { TApplicant } from "../../../../../utils/types";
import { formatDate } from "../../../../../utils/formatDate";
interface IApplicantCompareCardProps {
  student?: TApplicant;
}
export default function ApplicantCompareCard({student}:IApplicantCompareCardProps) {
  return (
    <section className={applicantCompareCard.applicant}>
      <div className={applicantCompareCard.mainInfo}>
        <div className={applicantCompareCard.personalInfoContainer}>
          <img className={applicantCompareCard.avataer} src={student?.avatar_url} alt="изображение студента" />
          <div className={applicantCompareCard.personalInfo}>
            <p className={applicantCompareCard.fullName}>{student?.first_name} {student?.last_name}</p>
            <p className={applicantCompareCard.personalInfoText}>
              Возраст: {student?.age}
            </p>
            <p className={applicantCompareCard.personalInfoText}>
              {student?.course}
            </p>
            <p className={applicantCompareCard.personalInfoText}>
              {student?.grade}, {student?.city}
            </p>
          </div>
        </div>
        <div className={applicantCompareCard.criteria}>
          <p className={applicantCompareCard.jobStatus}>Активно ищет работу</p>
          <p className={applicantCompareCard.salary}>От {student?.salary} ₽</p>
        </div>
      </div>
      <div className={applicantCompareCard.section}>
        <p className={applicantCompareCard.text}>
          <span className={applicantCompareCard.courseTitle}>Курс: </span>
          {student?.course}
        </p>
        <p className={applicantCompareCard.text}>
          <span className={applicantCompareCard.courseTitle}>
            Время окончания:
          </span>
          {student?.graduation_date !== undefined && formatDate(student?.graduation_date)}
        </p>
      </div>
      {/* <div className={applicantCompareCard.section}>
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
      </div> */}
      {/* <div className={applicantCompareCard.section}>
        <h2 className={applicantCompareCard.sectionTitle}>Образование</h2>
        <p className={applicantCompareCard.educationText}>
          сентябрь 2016 - июль 2020
        </p>
        <p className={applicantCompareCard.text}>
          Университет им. Иванова, бакалавр коммерции
        </p>
      </div> */}
      <div className={applicantCompareCard.section}>
        <h2 className={applicantCompareCard.sectionTitle}>О себе</h2>
        <p className={applicantCompareCard.text}>
          {student?.optional_description}
        </p>
      </div>
    </section>
  );
}
