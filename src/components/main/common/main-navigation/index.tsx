import navigation from "./index.module.css";
import MainUserProfile from "../main-user-profile";
import MainNavLinks from "../main-nav-links";

const Navigation: React.FC<{}> = (): JSX.Element => {
  return (
    <nav className={navigation.container}>
      <MainUserProfile />
      <MainNavLinks />
    </nav>
  );
};

export default Navigation;
