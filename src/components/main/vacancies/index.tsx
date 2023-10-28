import { useState } from "react";
import vacanciesPage from "./index.module.css";
import page from "../index.module.css";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import VacanciesCard from "./vacancies-card";
import BasicModal from "../../modal/modal";
// import NotifyBell from "./notify-button";
import BasicPopover from "./notify-modal"
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CreateVacancyButton from "./create-button";
import VacanciesModal from "../../vacancies-modal/vacancies-modal";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { vacancies, vacancy } from "../../../constants/vacanciesList";

const Vacancies: React.FC<{}> = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState("1");

  const [isBellModalVisible, setIsBellModalVisible] = useState<boolean>(false);
  const [isAddVacancyModalOpened, setIsAddVacancyModalOpened] =
    useState<boolean>(false);

  function handleOpenVacancyModal() {
    setIsAddVacancyModalOpened(true);
  }

  function handleCloseVacancyModal() {
    setIsAddVacancyModalOpened(false);
  }

  // function openNotifyModal() {
  //   setIsBellModalVisible(true);
  // }

  // function closeNotifyModal() {
  //   setIsBellModalVisible(false);
  // }

  function handleCardClick() {
    console.log('open vacancy');
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleCardClick() {
    navigate("vacancy");
  }

  return (
    <div className={`${page.pageElement} ${vacanciesPage.container}`}>
      <div className={vacanciesPage.titleContainer}>
        <h2 className={vacanciesPage.title}>Мои вакансии</h2>
        <BasicPopover />
      </div>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Активные" value="1" />
          <Tab label="Черновики" value="2" />
          <Tab label="Архив" value="3" />
        </TabList>
        <TabPanel className={vacanciesPage.list} value="1">
          <ul className={vacanciesPage.list}>
            {vacancies.map((element: vacancy, index) => {
              return (
                <li key={index} onClick={handleCardClick}>
                  <VacanciesCard vacancy={element} />
                </li>
              );
            })}
          </ul>
          {/* <div className={vacancies.activeVacancies}>
            <p>Вы еще не создали ни одной вакансии</p>
          </div> */}
          <div className={vacanciesPage.buttonFixed}>
            <Fab
              color="primary"
              aria-label="add"
              onClick={handleOpenVacancyModal}
            >
              <AddIcon />
            </Fab>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className={vacanciesPage.activeVacancies}>
            <p>Вы еще не создали ни одного черновика</p>

            <CreateVacancyButton />

          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className={vacanciesPage.activeVacancies}>
            <p>Нет ни одной вакансии в архиве</p>
          </div>
        </TabPanel>
      </TabContext>
      {/* <BasicPopover closePopup={closeNotifyModal} isVisible={isBellModalVisible}>
        <div>Новые уведомления</div>
      </BasicPopover> */}

      <BasicModal
        isVisible={isAddVacancyModalOpened}
        closePopup={handleCloseVacancyModal}
      >
        <VacanciesModal />
      </BasicModal>
    </div >
  );
};

export default Vacancies;
