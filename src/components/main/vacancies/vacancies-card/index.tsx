import vacanciesCard from "./index.module.css";
// import DeleteIcon from '@mui/icons-material/Delete';
import { vacancy } from "../../../../constants/vacanciesList";

interface VacanciesCardProps {
  vacancy: vacancy;
}

const VacanciesCard = ({ vacancy }: VacanciesCardProps) => {
  return (
    <section className={vacanciesCard.card}>
      <div className={vacanciesCard.vacancy}>
        <h4 className={vacanciesCard.name}>UX/UI-дизайнер (Junior)</h4>
        <div className={vacanciesCard.settings}>
          <div className={vacanciesCard.edit} onClick={() => {}} />
          <div className={vacanciesCard.delete} onClick={() => {}} />
        </div>
      </div>
      <p className={vacanciesCard.status}>Подходящие кандидаты: 54</p>
      <p className={vacanciesCard.status}>Откликнулось: 0</p>
      <div className={vacanciesCard.dataInfo}>
        <div className={vacanciesCard.dataTitle}>Дата публикации</div>
        <div className={vacanciesCard.dataCreate}>20 сентября 2023</div>
      </div>
    </section>
  );
};
export default VacanciesCard;
