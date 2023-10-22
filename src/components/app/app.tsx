import React from "react";
import app from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import LoginSelection from "../login-selection/login-selection";
import LoginPage from "../../pages/login";
import LoginInputsForm from "../login-inputs-form/login-inputs-form";
import ForgotPasswordPage from "../../pages/forogt-password-page";

function App() {
  return (
    <div className={app.app}>
      <Routes>
        <Route path="/login" element={<LoginPage />}>
          <Route path="/login" element={<LoginSelection />} />
          <Route path="company" element={<LoginInputsForm />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}>
          <Route path="success" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
