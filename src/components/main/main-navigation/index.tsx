import navigation from "./index.module.css";
import MainUserProfile from "../main-user-profile";
import MainNavLinks from "../main-nav-links";
import MainButtons from "../main-buttons";

const Navigation: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={navigation.container}>
      <MainUserProfile />
      <MainNavLinks />
      <MainButtons />
    </div>
  );
};

export default Navigation;
