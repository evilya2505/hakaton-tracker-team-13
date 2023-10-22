import React from "react";
import page from "./page.module.css";
import LoginInputsForm from "../components/forgot-passsword-form/forgot-password-form";
import { Link, useLocation } from "react-router-dom";
import forgotPasswordPage from "./forgot-password-page.module.css";

const ForgotPasswordPage: React.FC<{}> = (): JSX.Element => {
  const path: string = useLocation().pathname;

  return (
    <section className={page.wrapper}>
      <div className={`${page.page} ${forgotPasswordPage.page}`}>
        <h1 className={page.title}>Восстановление пароля</h1>
        {path === "/forgot-password/success" ? (
          <p className={forgotPasswordPage.text}>
            Отправили ссылку для восстановления пароля на почту mail@mail.mail{" "}
          </p>
        ) : (
          <LoginInputsForm />
        )}
      </div>
      <div className={page.additionalSection}>
        <p className={page.additionalText}>Новый пользователь?</p>
        <Link to="/login" className={page.link}>
          Зарегистрироваться
        </Link>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
