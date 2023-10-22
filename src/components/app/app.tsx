import React from "react";
import logo from "../../images/KT logo.svg";
import supportLogo from "../../images/tg-logo.svg"
import app from "./app.module.css";

function App() {
  return (
    <div className={app.appPage}>
      <div className={app.appMain}>
        <img src={logo} className={app.appLogo} alt="Логотип карьерного трека" />
        <div className={app.appSupport}>
         <img src={supportLogo} className={app.appSupportLogo} alt="Логитип службы поддержки" />
         <p className={app.appSupportTitle}>Написать в поддержку</p>
      </div>
      <p className={app.appCopyright}>&copy; Карьерный трекер, 2023</p>
    </div>
    </div >
  );
}

export default App;
