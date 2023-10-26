import mainStudentInfo from "./index.module.css";
import { applicant } from "../../../../../constants/applicantsList";
import ageRender from "../../../../../utils/ageRender";

interface IModalProps {
  selectedCard: applicant;
}

export default function MainStudentInfo({ selectedCard }: IModalProps) {
  return (
    <div className={mainStudentInfo.wrapper}>
      <div className={mainStudentInfo.student}>
        <div className={mainStudentInfo.studentInfo}>
          <div className={mainStudentInfo.topInfo}>
            <h1 className={mainStudentInfo.name}>
              {selectedCard.firstName} {selectedCard.lastName}
            </h1>
            <p className={mainStudentInfo.city}>{selectedCard.city}, {ageRender(selectedCard.age)}</p>
          </div>

          <div className={mainStudentInfo.middleInfo}>
            <img
              src={selectedCard.avatar}
              className={mainStudentInfo.image}
              alt="изображение студента"
            />

            <ul className={mainStudentInfo.mainInfo}>
              <li className={mainStudentInfo.mainInfoElement}>
                <h3 className={mainStudentInfo.subtitle}>Курс:</h3>
                <p className={mainStudentInfo.text}>
                  {selectedCard.course}
                </p>
              </li>
              <li className={mainStudentInfo.mainInfoElement}>
                <h3 className={mainStudentInfo.subtitle}>Грейд: </h3>
                <p className={mainStudentInfo.text}>{selectedCard.grade}</p>
              </li>
              <li className={mainStudentInfo.mainInfoElement}>
                <h3 className={mainStudentInfo.subtitle}>Дата окончания: </h3>
                <p className={mainStudentInfo.text}>{selectedCard.graduationDate}</p>
              </li>
              <li className={mainStudentInfo.mainInfoElement}>
                <h3 className={mainStudentInfo.subtitle}>Формат работы: </h3>
                <p className={mainStudentInfo.text}>{selectedCard.workFormat}</p>
              </li>
              <li className={mainStudentInfo.mainInfoElement}>
                <h3 className={mainStudentInfo.subtitle}>Зарплата:</h3>
                <p className={mainStudentInfo.text}>{selectedCard.salary} Р</p>
              </li>
              <li
                className={`${mainStudentInfo.mainInfoElement} ${mainStudentInfo.mainInfoElementContacts}`}
              >
                <h3 className={mainStudentInfo.subtitle}>Контакты:</h3>
                <ul className={mainStudentInfo.contactsList}>
                  <li className={mainStudentInfo.contact}>
                    <a className={mainStudentInfo.link} href="/">
                      name@yandex.ru
                    </a>
                  </li>
                  <li className={mainStudentInfo.contact}>
                    <a className={mainStudentInfo.link} href="/">
                      t.me/bestcandidate
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={mainStudentInfo.bottomInfo}>
            <h2 className={mainStudentInfo.title}>О себе</h2>
            <p className={mainStudentInfo.text}>
              {selectedCard.about}
            </p>
          </div>
        </div>
        <ul className={mainStudentInfo.statistics}>
          <li
            className={mainStudentInfo.statistic}
            style={{ backgroundColor: "#FFF9D3" }}
          >
            <h3 className={mainStudentInfo.subtitle}>{selectedCard.responses}</h3>откликов
          </li>
          <li
            className={mainStudentInfo.statistic}
            style={{ backgroundColor: "#CCC2ED" }}
          >
            <h3 className={mainStudentInfo.subtitle}>{selectedCard.completedTestTasks}</h3>тестовых
          </li>
          <li
            className={mainStudentInfo.statistic}
            style={{ backgroundColor: "#C2E5CE" }}
          >
            <h3 className={mainStudentInfo.subtitle}>{selectedCard.interviews}</h3>собеседований
          </li>
        </ul>
      </div>
    </div>
  );
}
