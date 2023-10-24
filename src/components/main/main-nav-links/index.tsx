import mainNavLinks from "./index.module.css";
import { Link } from "react-router-dom";

const MainNavLinks: React.FC<{}> = (): JSX.Element => {
  return (
    <ul className={mainNavLinks.list}>
      <li>
        <Link to="/applicants" className={`${mainNavLinks.link} ${mainNavLinks.link_type_applicants}`}>
          Соискатели
        </Link>
      </li>
      <li>
        <Link to="/vacancies" className={`${mainNavLinks.link} ${mainNavLinks.link_type_vacancies}`}>
          Мои вакансии
        </Link>
      </li>
      <li>
        <Link to="/statistics"className={`${mainNavLinks.link} ${mainNavLinks.link_type_statistics}`}>
          Статистика
        </Link>
      </li>
      <li>
        <Link to="/planer" className={`${mainNavLinks.link} ${mainNavLinks.link_type_planer}`}>
          Планер
        </Link>
      </li>
    </ul>
  );
};

export default MainNavLinks;
