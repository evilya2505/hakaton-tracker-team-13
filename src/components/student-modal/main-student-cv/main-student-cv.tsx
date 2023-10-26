import mainStudentCv from "./main-student-cv.module.css";
import downloadIcon from "../../../images/download.svg";
import { applicant } from "../../../constants/applicantsList";
import WorkExpItem from "../work-expirience-item";
import { workExp } from "../../../constants/applicantsList";

interface IModalProps {
  selectedCard: applicant;
}

export default function MainStudentCv({ selectedCard }: IModalProps) {
  const workExp: Array<workExp> = selectedCard.workExpirience;
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
          {workExp.map((element: workExp) => {
            return <WorkExpItem workExp={element} />;
          })}
        </ul>
      </div>
    </div>
  );
}
