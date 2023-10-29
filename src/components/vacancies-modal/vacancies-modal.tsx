import React from "react";
import vacanciesModal from "./vacancies-modal.module.css";
import { Tab, Tabs } from "@mui/material";
import AddVacancyForm from "../add-vacancy-form/add-vacancy-form";
import AddVacancyPreviewModal from "../add-vacany-preview-modal/add-vacancy-preview-modal";
import { useDispatch } from "../../services/hooks";
import { setModalVisibility } from "../../services/reducers/vacancies";

const VacanciesModal: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = () => {
    dispatch(setModalVisibility(true));
  };

  return (
    <div className={vacanciesModal.modal}>
      <h1 className={vacanciesModal.title}>Создание вакансии</h1>
      <div>
        <div className={vacanciesModal.top}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Модальное окно создания вакансий"
          >
            <Tab label="Основная информация" />
            <Tab label="Описание вакансии" />
          </Tabs>
          <p onClick={handleClick} className={vacanciesModal.linkText}>
            Предпросмотр
          </p>
        </div>

        {<AddVacancyForm value={value} defaultValues={null} />}
        <AddVacancyPreviewModal />
      </div>
    </div>
  );
};

export default VacanciesModal;
