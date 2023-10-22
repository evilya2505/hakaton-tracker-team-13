import React from "react";
import login from "./login.module.css";
import { Link, Outlet } from "react-router-dom";
import page from "./page.module.css";

const LoginPage: React.FC<{}> = (): JSX.Element => {
  return (
    <section className={page.wrapper}>
      <div className={`${page.page} ${login.page}`}>
        <h1 className={page.title}>Карьерный трекер</h1>
        <Outlet />
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

export default LoginPage;
