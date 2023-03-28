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
          <img alt="left arrow" aria-label="arrow" className="arrow left" src={require('../../assets/shared/arrow-left.png')} />
        </NavLink>
      )}
      {currentPage !== totalNumberOfPages && (
        <NavLink
          aria-label="page-browser"
          className="page-browser right"
          to={`?page=${currentPage + 1}`}
        >
          <img alt="right arrow" aria-label="arrow" className="arrow right" src={require('../../assets/shared/arrow-right.png')} />
        </NavLink>
      )}
    </>
  );
};

export default NavButtons;
