import { Link, useLocation } from "react-router-dom";
import mainNavLink from "./index.module.css";

interface MainNavLinkProps {
  name: string;
  title: string;
}

const MainNavLink = ({ name, title }: MainNavLinkProps): JSX.Element => {
  const location = useLocation();
  return (
      <Link
        to={`/${name}`}
        className={`
        ${mainNavLink.link} 
        ${mainNavLink.link_type_applicants} 
        ${location.pathname === `/${name}` && mainNavLink.link_active}`}
      >
        {title}
      </Link>
  );
};

export default MainNavLink;
