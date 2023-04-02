import "./NavArrow.css";
import "./--browse/NavArrow--browse--previous.css";
import "./--browse/NavArrow--browse--next.css";
import { NavLink } from "react-router-dom";
import NavArrowPicture from "../__Picture/NavArrowPicture";

const NavArrow = ({ browsingDirection, currentPage }) => (
  <NavLink
    className={`Nav-Arrow Nav-Arrow--browse--${browsingDirection}`}
    to={`?page=${
      browsingDirection === "previous" ? currentPage - 1 : currentPage + 1
    }`}
  >
    <NavArrowPicture browsingDirection={browsingDirection} />
  </NavLink>
);

export default NavArrow;
