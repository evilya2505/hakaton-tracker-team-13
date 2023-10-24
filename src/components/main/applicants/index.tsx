import applicants from './index.module.css';
import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import img from '../../../images/img.jpg';

const BootstrapButton  = styled(Button)({
  textTransform: 'none',
});

const Applicants: React.FC<{}> = (): JSX.Element => {
  return (
    <Container>
      <h2>Соискатели</h2>
      <div className={applicants.card}>
        <div className={applicants.description}>
          <div className={applicants.info}>
            <img src={img} className={applicants.img} alt='Фото' />
            <div className={applicants.profile}>
              <h4 className={applicants.name}>🔥 Анна Короткова</h4>
              <p className={applicants.tag}>Санкт-Петербург, 24 года</p>
            </div>
          </div>
          <div className={applicants.activity}>
            <div className={applicants.activityResponse}>40</div>
            <div className={applicants.activityTesting}>14</div>
            <div className={applicants.activityInterview}>10</div>
          </div>
          <div className={applicants.education}>
            <div className={applicants.educationItem}><span className={applicants.span}>Курс: </span>Дизайнер интерфейсов</div>
            <div className={applicants.educationItem}><span className={applicants.span}>Дата окончания: </span>июнь 2023</div>
            <div className={applicants.educationItem}><span className={applicants.span}>Формат работы: </span>удаленный</div>
          </div>
        </div>
        <div className={applicants.buttons}>
          <BootstrapButton  className={applicants.hide} variant="outlined">Скрыть</BootstrapButton>
          <BootstrapButton  className={applicants.add} variant="contained">Добавить</BootstrapButton>
        </div>
      </div>
    </Container>
  );
};

export default Applicants;
