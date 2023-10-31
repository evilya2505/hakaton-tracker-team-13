import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Main from "../main";
import Login from "../login";
import Applicants from "../main/applicants";
import Vacancies from "../main/vacancies";
import Statistics from "../main/statistics";
import Planer from "../main/planer";
import Vacancy from "../main/vacancies/vacancy";
import EditVacancy from "../main/vacancies/vacancy/edit-vacancy/inex";
import Settings from "../main/settings";
import mainApi from "../../utils/MainApi";
import { useDispatch } from "../../services/hooks";
import {
  setApplicants,
  setShownApplicants,
} from "../../services/reducers/applicants";
import { setVacancies } from "../../services/reducers/vacancies";
import { getCities } from "../../services/actions/cities";
import { getLanguages } from "../../services/actions/languages";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getVacancies();
    getApplicants();
    dispatch(getCities());
    dispatch(getLanguages());
  }, [dispatch, getApplicants, getVacancies]);

  function getVacancies() {
    mainApi
      .getVacancies()
      .then((res) => {
        dispatch(setVacancies(res.results));
      })
      .catch((err) => console.log(err));
  }

  function getApplicants() {
    mainApi
      .getApplicants()
      .then((res) => {
        dispatch(setApplicants(res.results));
        dispatch(setShownApplicants(res.results));
      })
      .catch((err) => console.log(err));
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
          <Route path="/vacancies" element={<Vacancies />}>
            <Route path="vacancy/:id" element={<Vacancy />}>
              <Route path="edit" element={<EditVacancy />} />
            </Route>
          </Route>
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
