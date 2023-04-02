import NavBarCounter from "../__Counter/NavBarCounter";
import NavBarLink from "../__Link/NavBarLink";

const NavBarElement = ({ cartLength, resetCategoryState, section }) => {
  return (
    <li className="Nav-Bar__Element">
      {cartLength > 0 && section === "cart" && (
        <NavBarCounter cartLength={cartLength} />
      )}
      <NavBarLink section={section} resetCategoryState={resetCategoryState} />
    </li>
  );
};

export default NavBarElement;
