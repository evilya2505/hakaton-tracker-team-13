import React from "react";
import app from "./app.module.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Main from "../main";
import Login from "../login";
import Applicants from "../main/applicants";
import Vacancies from "../main/vacancies";
import Statistics from "../main/statistics";
import Planer from "../main/planer";
import Settings from "../main/settings";
import mainApi from "../../utils/MainApi";

function App() {
  React.useEffect(() => {
    mainApi
      .getApplicants()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
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
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login/*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
