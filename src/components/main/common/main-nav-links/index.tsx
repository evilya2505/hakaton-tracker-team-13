import mainNavLinks from "./index.module.css";
import MainNavLink from "../../common/main-nav-link";
import { navLinksList } from "../../../../constants/navLinksList";

const MainNavLinks: React.FC<{}> = (): JSX.Element => {
  return (
    <ul className={mainNavLinks.list}>
      {navLinksList.map((element: { name: string; title: string }, index) => {
        return (
          <li className={mainNavLinks.item}>
            <MainNavLink
              key={index}
              name={element.name}
              title={element.title}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MainNavLinks;
