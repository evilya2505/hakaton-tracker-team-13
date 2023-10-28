import * as React from "react";
import AddVacancyForm from "../../../../add-vacancy-form/add-vacancy-form";
import editVacancy from "./index.module.css";
export default function EditVacancy() {
  return (
    <div className={editVacancy.container}>
      <AddVacancyForm value={3} />
    </div>
  );
}
