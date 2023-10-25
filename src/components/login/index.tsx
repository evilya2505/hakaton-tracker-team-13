import React from "react";
import app from "./index.module.css";
import logo from "../../images/KT logo.svg";
import supportLogo from "../../images/tg-logo.svg";
import { Routes, Route } from "react-router-dom";
import LoginSelection from "./login-selection/login-selection";
import LoginPage from "../../pages/login";
import LoginInputsForm from "./login-inputs-form/login-inputs-form";
import ForgotPasswordPage from "../../pages/forogt-password-page";

const Login: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={app.appPage}>
      <div className={app.appMain}>
        <img
          src={logo}
          className={app.appLogo}
          alt="Логотип карьерного трека"
        />

        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route path="/" element={<LoginSelection />} />
            <Route path="/company" element={<LoginInputsForm />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPasswordPage />}>
            <Route path="success" element={<ForgotPasswordPage />} />
          </Route>
        </Routes>

        <div className={app.appSupport}>
          <img
            src={supportLogo}
            className={app.appSupportLogo}
            alt="Логитип службы поддержки"
          />
          <p className={app.appSupportTitle}>Написать в поддержку</p>
        </div>
        <p className={app.appCopyright}>&copy; Карьерный трекер, 2023</p>
      </div>
    </div>
  );
};

export default Login;
