import { useState } from "react";
import vacancies from "./index.module.css";
import page from "../index.module.css";
import { Tabs, Tab, Box } from "@mui/material";
import VacanciesCard from "./vacancies-card";
import BasicModal from "../../modal/modal";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Vacancies: React.FC<{}> = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const [isBellModalVisible, setIsBellModalVisible] = useState<boolean>(false);

  function openModal() {
    setIsBellModalVisible(true);
  }

  function closeModal() {
    setIsBellModalVisible(false);
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Активные" {...a11yProps(0)} />
          <Tab label="Черновики" {...a11yProps(1)} />
          <Tab label="Архив" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <VacanciesCard />
        {/* <div className={vacancies.activeVacancies}>
          <p>Вы еще не создали ни одной вакансии</p>
        </div> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={vacancies.activeVacancies}>
          <p>Вы еще не создали ни одного черновика</p>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className={vacancies.activeVacancies}>
          <p>Нет ни одной вакансии в архиве</p>
        </div>
      </CustomTabPanel>
      <BasicModal closePopup={closeModal} isVisible={isBellModalVisible}>
        <div>Новые уведомления</div>
      </BasicModal>
    </div>
  );
};

export default Vacancies;
