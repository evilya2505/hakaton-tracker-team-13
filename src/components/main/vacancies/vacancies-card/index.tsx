import vacanciesCard from "./index.module.css";
import { vacancy } from "../../../../constants/vacanciesList";
import { formatFullDate } from "../../../../utils/formatDate";

interface VacanciesCardProps {
  vacancy: vacancy;
}

const VacanciesCard = ({ vacancy }: VacanciesCardProps) => {
  return (
    <section className={vacanciesCard.card} onClick={handleCardClick}>
      <div className={vacanciesCard.vacancy}>
        <h4 className={vacanciesCard.name}>{vacancy.title} ({vacancy.grade})</h4>
        <div className={vacanciesCard.settings}>
          <div className={vacanciesCard.edit} onClick={() => {}} />
          <div className={vacanciesCard.delete} onClick={() => {}} />
        </div>
      </div>
      <p className={vacanciesCard.status}>Подходящие кандидаты: 54</p>
      <p className={vacanciesCard.status}>Откликнулось: 0</p>
      <div className={vacanciesCard.dataInfo}>
        <div className={vacanciesCard.dataTitle}>Дата публикации</div>
        <div className={vacanciesCard.dataCreate}>{formatFullDate(vacancy.pubDate)}</div>
      </div>
    </section>
  );
};
export default VacanciesCard;
