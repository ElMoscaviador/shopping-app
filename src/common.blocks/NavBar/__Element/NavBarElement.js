import "./--accessibility/NavBarElement--accessibility.css";
import { useContext } from "react";
import AccessibilityContext from "../../../common.shared/contexts";
import NavBarCounter from "../__Counter/NavBarCounter";
import NavBarLink from "../__Link/NavBarLink";

const NavBarElement = ({ cartLength, resetCategoryState, section }) => {
  const { accessibilityMode } = useContext(AccessibilityContext);
  return (
    <li
      className={`Nav-Bar__Element ${
        accessibilityMode ? "Nav-Bar__Element--accessibility" : ""
      } `}
    >
      {cartLength > 0 && section === "cart" && (
        <NavBarCounter cartLength={cartLength} />
      )}
      <NavBarLink section={section} resetCategoryState={resetCategoryState} />
    </li>
  );
};

export default NavBarElement;
