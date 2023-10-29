import * as React from "react";
import vacancyInfo from "./index.module.css";
import DropDown from "../vacancy-info-drop-down";
import { TVacancy } from "../../../../../utils/types";

interface IVacancyInfoProps {
  vacancy: TVacancy | null;
}

const VacancyInfo: React.FC<IVacancyInfoProps> = ({
  vacancy,
}: IVacancyInfoProps): JSX.Element => {
  return (
    <div className={vacancyInfo.wrapper}>
      <section className={vacancyInfo.container}>
        <DropDown title="О вакансии" text={vacancy?.description} />
        <DropDown title="Обязанности" text={vacancy?.responsibility} />
        <DropDown
          title="Требования обязательные"
          text={vacancy?.requirements}
        />
        <DropDown
          title="Требования необязательные"
          text={vacancy?.optional_requirements}
        />
        <DropDown title="Условия" text={vacancy?.conditions} />
        <DropDown title="Этапы отбора" text={vacancy?.selection_stages} />
      </section>
    </div>
  );
};

export default VacancyInfo;
