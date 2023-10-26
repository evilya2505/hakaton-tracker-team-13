import { useState } from "react";
import vacancies from "./index.module.css";
import page from "../index.module.css";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import VacanciesCard from "./vacancies-card";
import BasicModal from "../../modal/modal";

const Vacancies: React.FC<{}> = (): JSX.Element => {
  const [value, setValue] = useState("1");
  const [isBellModalVisible, setIsBellModalVisible] = useState<boolean>(false);

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
        <TabPanel value="1">
          <VacanciesCard />
          {/* <div className={vacancies.activeVacancies}>
            <p>Вы еще не создали ни одной вакансии</p>
          </div> */}
        </TabPanel>
        <TabPanel value="2">
          <div className={vacancies.activeVacancies}>
            <p>Вы еще не создали ни одного черновика</p>
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
    </div>
  );
};

export default Vacancies;
