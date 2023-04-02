import "./NavBarList.css";
import NavBarElement from "../__Element/NavBarElement";

const NavBarList = ({ sections, cartLength, resetCategoryState }) => {
  return (
    <ul className="Nav-Bar__List">
      {sections.map((section) => (
        <NavBarElement
          cartLength={cartLength}
          key={section}
          resetCategoryState={resetCategoryState}
          section={section}
        />
      ))}
    </ul>
  );
};

export default NavBarList;
