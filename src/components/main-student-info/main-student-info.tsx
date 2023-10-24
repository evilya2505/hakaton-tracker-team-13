import React from "react";
import mainStudentInfo from "./main-student-info.module.css";
import studentImage from "../../images/testStudentImage.png";

export default function MainStudentInfo() {
  return (
    <div className={mainStudentInfo.student}>
      <div className={mainStudentInfo.studentInfo}>
        <div className={mainStudentInfo.topInfo}>
          <h1 className={mainStudentInfo.name}>Максим Иванченко</h1>
          <p className={mainStudentInfo.city}>Москва</p>
        </div>

        <div className={mainStudentInfo.middleInfo}>
          <img
            src={studentImage}
            className={mainStudentInfo.image}
            alt="изображение студента"
          />

          <ul className={mainStudentInfo.mainInfo}>
            <li className={mainStudentInfo.mainInfoElement}>
              <h3 className={mainStudentInfo.subtitle}>Курс</h3>
              <p className={mainStudentInfo.text}>
                Дизайн мобильный и кросс-платформенных приложений
              </p>
            </li>
            <li className={mainStudentInfo.mainInfoElement}>
              <h3 className={mainStudentInfo.subtitle}>Грейд</h3>
              <p className={mainStudentInfo.text}>Middle</p>
            </li>
            <li className={mainStudentInfo.mainInfoElement}>
              <h3 className={mainStudentInfo.subtitle}>Дата окончания</h3>
              <p className={mainStudentInfo.text}>апрель 2023</p>
            </li>
            <li className={mainStudentInfo.mainInfoElement}>
              <h3 className={mainStudentInfo.subtitle}>Формат работы</h3>
              <p className={mainStudentInfo.text}>Офис</p>
            </li>
            <li className={mainStudentInfo.mainInfoElement}>
              <h3 className={mainStudentInfo.subtitle}>Зарплата</h3>
              <p className={mainStudentInfo.text}>1000 000 Р</p>
            </li>
            <li className={mainStudentInfo.mainInfoElement}>
              <h3 className={mainStudentInfo.subtitle}>Контакты</h3>
              <ul className={mainStudentInfo.contactsList}>
                <li className={mainStudentInfo.contact}>name@yandex.ru</li>
                <li className={mainStudentInfo.contact}>t.me/bestcandidate</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={mainStudentInfo.bottomInfo}>
          <h2 className={mainStudentInfo.title}>О себе</h2>
          <p className={mainStudentInfo.text}>
            Текст о себе от кандидата, количество символов
            ограничено.............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
          </p>
        </div>
      </div>
      <ul className={mainStudentInfo.statistics}>
        <li className={mainStudentInfo.statistic}>40 откликов</li>
        <li className={mainStudentInfo.statistic}>14 тестовых</li>
        <li className={mainStudentInfo.statistic}>10 собеседований</li>
      </ul>
    </div>
  );
}
