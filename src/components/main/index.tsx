import { PropsWithChildren, useEffect } from "react";
import main from "./index.module.css";
import Navigation from "./common/main-navigation";
import { useNavigate } from "react-router";

const Main: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/applicants");
  }, []);
  return (
    <main className={main.page}>
      <Navigation />
      {children}
    </main>
  );
};

export default Main;
