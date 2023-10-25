import mainUserProfile from "./index.module.css";
import avatar from "../../../../images/avatar.png";
import partners from "../../../../images/partners.svg";

const MainUserProfile: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={mainUserProfile.container}>
      <div className={mainUserProfile.infoContainer}>
        <img src={avatar} alt="Аватар" className={mainUserProfile.avatar}/>
        <p className={mainUserProfile.name}>Иванов И.</p>
        <img src={partners} alt="" className={mainUserProfile.partnersIcon}/>
      </div>
      <p className={mainUserProfile.company}>Компания мечты</p>
      <p className={`${mainUserProfile.company} ${mainUserProfile.company_type_partner}`}>Партнер ЯПрактикума</p>
    </div>
  );
};

export default MainUserProfile;
