import { useState } from "react";
import vacancies from "./index.module.css";
import page from "../index.module.css";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import VacanciesCard from "./vacancies-card";
import BasicModal from "../../modal/modal";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CreateVacancyButton from "./create-button";
import VacanciesModal from "../../vacancies-modal/vacancies-modal";

const Vacancies: React.FC<{}> = (): JSX.Element => {
  const [value, setValue] = useState("1");
  const [isBellModalVisible, setIsBellModalVisible] = useState<boolean>(false);
  const [isAddVacancyModalOpened, setIsAddVacancyModalOpened] = useState<boolean>(false);

  function handleOpenVacancyModal() {
    console.log(true)
    setIsAddVacancyModalOpened(true);
  }

  function handleCloseVacancyModal() {
    setIsAddVacancyModalOpened(false);
  }

  function openModal() {
    setIsBellModalVisible(true);
  }

  function closeModal() {
    setIsBellModalVisible(false);
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={`${page.pageElement} ${vacancies.container}`}>
      <div className={vacancies.titleContainer}>
        <h2 className={vacancies.title}>Мои вакансии</h2>
        <button
          type="button"
          className={vacancies.notificationsButton}
          onClick={openModal}
        ></button>
      </div>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Активные" value="1" />
          <Tab label="Черновики" value="2" />
          <Tab label="Архив" value="3" />
        </TabList>
        <TabPanel className={vacancies.list} value="1">
          <VacanciesCard />
          {/* <div className={vacancies.activeVacancies}>
            <p>Вы еще не создали ни одной вакансии</p>
          </div> */}
          <button onClick={handleOpenVacancyModal}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          </button>
        </TabPanel>
        <TabPanel value="2">
          <div className={vacancies.activeVacancies}>
            <p>Вы еще не создали ни одного черновика</p>
            <CreateVacancyButton /> 
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className={vacancies.activeVacancies}>
            <p>Нет ни одной вакансии в архиве</p>
          </div>
        </TabPanel>
      </TabContext>

      <BasicModal closePopup={closeModal} isVisible={isBellModalVisible}>
        <div>Новые уведомления</div>
      </BasicModal>

      <BasicModal isVisible={isAddVacancyModalOpened} closePopup={handleCloseVacancyModal}>
        <VacanciesModal />
      </BasicModal>
    </div>
  );
};

export default Vacancies;
