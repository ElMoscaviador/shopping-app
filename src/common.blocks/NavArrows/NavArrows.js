import NavArrow from "./__Arrow/NavArrow";

const NavArrows = ({ currentPage, totalNumberOfPages }) => {
  return (
    <>
      {currentPage > 1 && (
        <NavArrow browsingDirection="previous" currentPage={currentPage} />
      )}
      {currentPage !== totalNumberOfPages && (
        <NavArrow browsingDirection="next" currentPage={currentPage} />
      )}
    </>
  );
};

export default NavArrows;
