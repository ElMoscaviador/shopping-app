import { NavLink } from "react-router-dom";
import NavBarIcon from "../__Icon/NavBarIcon";

const NavBarLink = ({ section, resetCategoryState }) => {
  return (
    <NavLink
      aria-label={`Open the ${section === "/" ? "home" : section} section`}
      className="Nav-Bar__Link"
      to={section}
      onClick={() => resetCategoryState}
    >
      <NavBarIcon section={section} />
    </NavLink>
  );
};

export default NavBarLink;
