import mainNavLinks from "./index.module.css";
import { Link } from "react-router-dom";

const MainNavLinks: React.FC<{}> = (): JSX.Element => {
  return (
    <ul className={mainNavLinks.container}>
      {/* <li>
        <Link to="/">Соискатели</Link>
      </li>
      <li>
        <Link to="/">Мои вакансии</Link>
      </li>
      <li>
        <Link to="/">Статистика</Link>
      </li>
      <li>
        <Link to="/">Планер</Link>
      </li> */}
    </ul>
  );
};

export default MainNavLinks;
