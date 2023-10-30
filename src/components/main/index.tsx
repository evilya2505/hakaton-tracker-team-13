import { PropsWithChildren } from "react";
import main from "./index.module.css";
import Navigation from "./common/main-navigation";

const Main: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <main className={main.page}>
      <Navigation />
      <div className={main.mainPage}>
        {children}
      </div>
    </main>
  );
};

export default Main;
