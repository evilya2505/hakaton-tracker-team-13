import { Link, useLocation } from "react-router-dom";
import "./index.css";

interface MainNavLinkProps {
  name: string;
  title: string;
}

const MainNavLink = ({ name, title }: MainNavLinkProps): JSX.Element => {
  const linksClass = "link_type_" + name;
  const location = useLocation();
  return (
    <Link
      to={`/${name === 'logout' ? 'login' : name}`}
      className={`link ${linksClass} ${location.pathname === `/${name}` && "link_active"}`}
    >
      {title}
    </Link>
  );
};

export default MainNavLink;
