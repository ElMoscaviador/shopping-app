import "./NavBar.css";
import "./--categories-displayed/NavBar--with-categories-displayed.css";
import CategoriesNav from "../../common.blocks/CategoriesNav/CategoriesNav";
import NavBarList from "./__List/NavBarList";

const NavBar = ({ cartLength, categoryVisitedState, setCurrentCategory }) => {
  const sections = ["/", "shop", "cart"];
  const [categoryIsVisited, setCategoryIsVisited] = categoryVisitedState;

  const resetCategoryState = () => {
    setCategoryIsVisited(false);
    setCurrentCategory("");
  };

  return (
    <nav
      className={`Nav-Bar ${
        categoryIsVisited ? "Nav-Bar--categories-displayed" : ""
      } `}
    >
      {categoryIsVisited && <CategoriesNav />}
      <NavBarList
        cartLength={cartLength}
        sections={sections}
        resetCategoryState={resetCategoryState}
      />
    </nav>
  );
};

export default NavBar;
