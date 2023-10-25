import React from "react";
import vacanciesModal from './vacancies-modal.module.css';
import { Tab, Tabs } from "@mui/material";
import AddVacancyForm from "../add-vacancy-form/add-vacancy-form";

const VacanciesModal: React.FC<{}> = (): JSX.Element => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

  return (
    <div className={vacanciesModal.modal}>
        <h1 className={vacanciesModal.title}>Создание вакансии</h1>
        <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Модальное окно создания вакансий"
        >
          <Tab label="Основная информация" />
          <Tab label="Описание вакансии" />
        </Tabs>
        {value === 0 && <AddVacancyForm />}
      </div>
    </div>
  );
};

export default VacanciesModal;
