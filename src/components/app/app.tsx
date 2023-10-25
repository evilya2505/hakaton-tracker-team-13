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
import StudentModal from "../student-modal/student-modal";

function App() {
  const [isUserModalVisible, setIsUserModalVisible] =
    React.useState<boolean>(false);

  function closeModal() {
    setIsUserModalVisible(false);
  }

  function openUserModal() {
    setIsUserModalVisible(true);
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
      <BasicModal closePopup={closeModal} isVisible={isUserModalVisible}>
        <StudentModal />
      </BasicModal>

    </>
  );
}

export default App;
