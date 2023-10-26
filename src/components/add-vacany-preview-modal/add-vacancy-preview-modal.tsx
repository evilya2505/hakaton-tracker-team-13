import React from "react";
import BasicModal from "../modal/modal";
import { useSelector } from "../../services/hooks";
import { useDispatch } from "../../services/hooks";
import { setModalVisibility } from "../../services/reducers/vacancies";
import { AddVacancyFormValues } from "../../utils/types";
import addVacancyPreviewModal from './add-vacancy-preview-modal.module.css';

const AddVacancyPreviewModal: React.FC<{}> = ({}): JSX.Element => {
    const dispatch = useDispatch();
    const isOpened:boolean = useSelector((store) => store.vacancies.isPreviewModalVisible);
    const currentVacancy:AddVacancyFormValues | null = useSelector((store) => store.vacancies.currentVacancy);

    const handleClose = () => {
      dispatch(setModalVisibility(false));
    };
  
    return (
      <React.Fragment>
        <BasicModal
          isVisible={isOpened}
          closePopup={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
            <div className={addVacancyPreviewModal.container}>
                <div className={addVacancyPreviewModal.section}>
                    <h2 className={addVacancyPreviewModal.title}>
                        О вакансии
                    </h2>
                    <p className={addVacancyPreviewModal.text}>{currentVacancy?.aboutVacancy}</p>
                </div>

                <div className={addVacancyPreviewModal.section}>
                    <h2 className={addVacancyPreviewModal.title}>
                        Обязанности
                    </h2>
                    <ul className={addVacancyPreviewModal.list}>
                        <li className={addVacancyPreviewModal.text}>{currentVacancy?.duty}</li>
                    </ul>
                </div>

                <div className={addVacancyPreviewModal.section}>
                    <h2 className={addVacancyPreviewModal.title}>
                        Требования обязательные
                    </h2>
                    <ul className={addVacancyPreviewModal.list}>
                        <li className={addVacancyPreviewModal.text}>{currentVacancy?.requirmentsMandatory}</li>
                    </ul>
                </div>

                <div className={addVacancyPreviewModal.section}>
                    <h2 className={addVacancyPreviewModal.title}>
                        Условия
                    </h2>
                    <ul className={addVacancyPreviewModal.list}>
                        <li className={addVacancyPreviewModal.text}>{currentVacancy?.workConditions}</li>
                    </ul>
                </div>

                <div className={addVacancyPreviewModal.section}>
                    <h2 className={addVacancyPreviewModal.title}>
                        Этапы отбора
                    </h2>
                    <ul className={addVacancyPreviewModal.list}>
                        <li className={addVacancyPreviewModal.text}>{currentVacancy?.selectionStages}</li>
                    </ul>
                </div>
            </div>
        </BasicModal>
      </React.Fragment>
    );
  }

  export default AddVacancyPreviewModal;