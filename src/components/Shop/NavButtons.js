import { NavLink } from "react-router-dom";

const NavButtons = ({ currentPage, totalNumberOfPages }) => {
  return (
    <>
      {currentPage > 1 && (
        <NavLink
          aria-label="page-browser"
          className="page-browser left"
          to={`?page=${currentPage - 1}`}
        >
          <span className="arrow left" />
        </NavLink>
      )}
      {currentPage !== totalNumberOfPages && (
        <NavLink
          aria-label="page-browser"
          className="page-browser right"
          to={`?page=${currentPage + 1}`}
        >
          <span className="arrow right" />
        </NavLink>
      )}
    </>
  );
};

export default NavButtons;
