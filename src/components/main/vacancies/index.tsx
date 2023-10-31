import React, { SyntheticEvent, useState } from "react";
import vacanciesPage from "./index.module.css";
import page from "../index.module.css";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { tabStyle } from "../../../constants/tabStyle"
import VacanciesCard from "./vacancies-card";
import BasicModal from "../../modal/modal";
import BasicPopover from "./notify-modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CreateVacancyButton from "./create-button";
import VacanciesModal from "../../vacancies-modal/vacancies-modal";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { setAddVacancyModalVisibility } from "../../../services/reducers/vacancies";
import { useSelector, useDispatch } from "../../../services/hooks";
import { TVacancy } from "../../../utils/types";
import { getNeededVacancyData } from "../../../services/actions/vacancies";

const Vacancies: React.FC<{}> = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState("1");

  const dispatch = useDispatch();
  const isAddVacancyModalVisible = useSelector(
    (state) => state.vacancies.isAddVacancyModalVisible
  );

  const vacancies = useSelector((state) => state.vacancies.vacancies);

  function handleOpenVacancyModal() {
    dispatch(setAddVacancyModalVisibility(true));
  }

  function handleCloseVacancyModal() {
    dispatch(setAddVacancyModalVisibility(false));
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleVacancyClick(vacancy: TVacancy, index: number) {
    dispatch(getNeededVacancyData(vacancy));
    navigate("vacancy/" + index);
  }

  return (
    <div className={`${page.pageElement} ${vacanciesPage.container}`}>
      {location.pathname.includes("vacancy") ? (
        <Outlet />
      ) : (
        <>
          <div className={vacanciesPage.titleContainer}>
            <h2 className={vacanciesPage.title}>Мои вакансии</h2>
            <BasicPopover />
          </div>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                height: '2px',
                indicatorColor:
                  'var(--main-blue-main)',
              }}
            >
              <Tab label="Активные" value="1" sx={tabStyle} />
              <Tab label="Черновики" value="2" sx={tabStyle} />
              <Tab label="Архив" value="3" sx={tabStyle} />
            </TabList>
            <TabPanel value="1">
              {vacancies.length > 0 ? (
                <>
                  <div className={vacanciesPage.buttonFixed}>
                    <Fab
                      color="primary"
                      aria-label="add"
                      onClick={handleOpenVacancyModal}
                    >
                      <AddIcon />
                    </Fab>
                  </div>
                    <ul className={vacanciesPage.list}>
                    {vacancies.map((element: TVacancy, index: number) => {
                      return (
                        <li
                          key={element.id}
                          onClick={() => {
                            handleVacancyClick(element, index);
                          }}
                        >
                          <VacanciesCard vacancy={element} />
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <div className={vacanciesPage.activeVacancies}>
                  <p>Вы еще не создали ни одной вакансии</p>
                  <CreateVacancyButton />
                </div>
              )}

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

          <BasicModal
            isVisible={isAddVacancyModalVisible}
            closePopup={handleCloseVacancyModal}
          >
            <VacanciesModal />
          </BasicModal>
        </>
      )
      }
    </div >
  );
};

export default Vacancies;
