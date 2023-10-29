import * as React from "react";
import AddVacancyForm from "../../../../add-vacancy-form/add-vacancy-form";
import editVacancy from "./index.module.css";
import { useSelector } from "../../../../../services/hooks";
export default function EditVacancy() {
  const vacancyObject = useSelector(
    (store) => store.vacancies.currentVacancyPage
  );
  return (
    <div className={editVacancy.container}>
      <AddVacancyForm value={3} defaultValues={vacancyObject} />
    </div>
  );
}
