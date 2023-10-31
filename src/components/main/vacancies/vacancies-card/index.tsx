import vacanciesCard from "./index.module.css";
import { TVacancy } from "../../../../utils/types";
import { formatFullDate } from "../../../../utils/formatDate";

interface VacanciesCardProps {
  vacancy: TVacancy;
}

const VacanciesCard = ({ vacancy }: VacanciesCardProps) => {
  return (
    <section className={vacanciesCard.card}>
      <div className={vacanciesCard.vacancy}>
        <h4 className={vacanciesCard.name}>
          {vacancy.title} ({vacancy.grade})
        </h4>
        <div className={vacanciesCard.settings}>
          <div className={vacanciesCard.edit} onClick={() => {}} />
          <div className={vacanciesCard.delete} onClick={() => {}} />
        </div>
      </div>
      <p className={vacanciesCard.status}>
        Подходящие кандидаты: {' '}
        {vacancy.suitable_candidates_count
          ? vacancy.suitable_candidates_count
          : "0"}
      </p>
      <p className={vacanciesCard.status}>
        Откликнулось: {vacancy.response_count ? vacancy.response_count : '0'}
      </p>
      <div className={vacanciesCard.dataInfo}>
        <div className={vacanciesCard.dataTitle}>Дата публикации</div>
        <div className={vacanciesCard.dataCreate}>
          {formatFullDate(vacancy.created)}
        </div>
      </div>
    </section>
  );
};
export default VacanciesCard;
