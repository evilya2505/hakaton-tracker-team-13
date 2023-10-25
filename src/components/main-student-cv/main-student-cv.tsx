import React, { ReactNode } from "react";
import Modal from "@mui/material/Modal";
import modal from "./modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import mainStudentCv from "./main-student-cv.module.css";
import DownloadIcon from "@mui/icons-material/Download";
import downloadIcon from "../../images/download.svg";
export default function MainStudentCv({}) {
  return (
    <div className={mainStudentCv.wrapper}>
      <div className={mainStudentCv.downloadSection}>
        <p className={mainStudentCv.text}>
          Место для ссылки на резюме и портфолио (если кандидат добавил ранее)
        </p>
        <button className={mainStudentCv.button}>
          <img alt="иконка скачивания" src={downloadIcon} />
          <p className={mainStudentCv.buttonText}>Скачать резюме</p>
        </button>
      </div>
      <div className={mainStudentCv.experience}>
        <h2 className={mainStudentCv.title}>Опыт работы:</h2>
        <ul className={mainStudentCv.experienceList}>
          <li className={mainStudentCv.experienceItem}>
            <div className={mainStudentCv.experienceTime}>
              <p>
                Aпрель 2022 –<br />
                настоящее время
              </p>
              <p className={mainStudentCv.duration}>9 месяцев</p>
            </div>
            <div className={mainStudentCv.experienceDescription}>
              <p className={mainStudentCv.subtitle}>Название компании</p>
              <p className={mainStudentCv.subtitle}>UX/UI дизайнер</p>
              <ul className={mainStudentCv.list}>
                <li>
                  <h2 className={mainStudentCv.text}>Описание обязанностей</h2>
                  <p className={mainStudentCv.deal}>
                    ......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className={mainStudentCv.experienceItem}>
            <div className={mainStudentCv.experienceTime}>
              <p>
                Aпрель 2022 –<br />
                настоящее время
              </p>
              <p className={mainStudentCv.duration}>9 месяцев</p>
            </div>
            <div className={mainStudentCv.experienceDescription}>
              <p className={mainStudentCv.subtitle}>Название компании</p>
              <p className={mainStudentCv.subtitle}>UX/UI дизайнер</p>
              <ul className={mainStudentCv.list}>
                <li>
                  {" "}
                  <h2 className={mainStudentCv.text}>Описание обязанностей</h2>
                  <p className={mainStudentCv.deal}>
                    .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
