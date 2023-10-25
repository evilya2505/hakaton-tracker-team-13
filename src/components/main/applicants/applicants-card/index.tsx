import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import img from "../../../../images/img.jpg";
import applicantsCard from './index.module.css';

const BootstrapButton = styled(Button)({
  textTransform: "none",
});

interface ApplicantsCardProps {
  name: string;
  city: string;
  age: string;
}


const ApplicantsCard = ({name, age, city}: ApplicantsCardProps): JSX.Element => {
  return (
    <div className={applicantsCard.card}>
      <div className={applicantsCard.description}>
        <div className={applicantsCard.info}>
          <img src={img} className={applicantsCard.img} alt="Фото" />
          <div className={applicantsCard.profile}>
            <h4 className={applicantsCard.name}>🔥 {name}</h4>
            <p className={applicantsCard.tag}>{city}, {age}</p>
          </div>
        </div>
        <div className={applicantsCard.activity}>
          <div className={applicantsCard.activityResponse}>40</div>
          <div className={applicantsCard.activityTesting}>14</div>
          <div className={applicantsCard.activityInterview}>10</div>
        </div>
        <div className={applicantsCard.education}>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Курс: </span>Дизайнер интерфейсов
          </div>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Дата окончания: </span>июнь 2023
          </div>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Формат работы: </span>удаленный
          </div>
        </div>
      </div>
      <div className={applicantsCard.buttons}>
        <BootstrapButton className={applicantsCard.hide} variant="outlined">
          Скрыть
        </BootstrapButton>
        <BootstrapButton className={applicantsCard.add} variant="contained">
          Добавить
        </BootstrapButton>
      </div>
    </div>
  );
};

export default ApplicantsCard;