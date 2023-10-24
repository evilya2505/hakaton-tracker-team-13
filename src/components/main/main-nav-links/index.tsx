import mainNavLinks from "./index.module.css";
import { Link } from "react-router-dom";

const MainNavLinks: React.FC<{}> = (): JSX.Element => {
  return (
    <ul className={mainNavLinks.list}>
      <li>
        <Link to="/applicants" className={mainNavLinks.link}>Соискатели</Link>
      </li>
      <li>
        <Link to="/vacancies" className={mainNavLinks.link}>Мои вакансии</Link>
      </li>
      <li>
        <Link to="/statistics" className={mainNavLinks.link}>Статистика</Link>
      </li>
      <li>
        <Link to="/planer" className={mainNavLinks.link}>Планер</Link>
      </li>
    </ul>
  );
};

export default MainNavLinks;
