import React from "react";
import app from "./app.module.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Main from "../main";
import Login from "../login";
import Applicants from "../main/applicants";
import Vacancies from "../main/vacancies";
import Statistics from "../main/statistics";
import Planer from "../main/planer";
import BasicModal from "../modal/modal";
import VacanciesModal from "../vacancies-modal/vacancies-modal";
import { Button } from "@mui/material";
function App() {
  const [isAddVacancyModalOpened, setIsAddVacancyModalOpened] = React.useState<boolean>(false);

  function handleOpenVacancyModal() {
    setIsAddVacancyModalOpened(true);
  }

  function handleCloseModal() {
    setIsAddVacancyModalOpened(false);
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Outlet />
            </Main>
          }
        >
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/planer" element={<Planer />} />
          <Route path="/settings" element={<Planer />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Button onClick={handleOpenVacancyModal}>test</Button>
      <BasicModal isVisible={isAddVacancyModalOpened} closePopup={handleCloseModal}>
        <VacanciesModal />
      </BasicModal>
    </>
  );
}

export default App;
