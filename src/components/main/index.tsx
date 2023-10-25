import { PropsWithChildren } from "react";
import main from "./index.module.css";
import Navigation from "./common/main-navigation";

const Main: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <main className={main.page}>
      <Navigation />
      {children}
    </main>
  );
};

export default Main;
