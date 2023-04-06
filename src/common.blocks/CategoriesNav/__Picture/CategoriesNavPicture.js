import "./CategoriesNavPicture.css";
import "./--direction/CategoriesNavPicture--direction.css";
import "./--status/CategoriesNavPicture--status.css";
import "./--direction--swipe/CategoriesNavPicture--direction--swipe.css";
import "./--accessibility/CategoriesNavPicture--accessibility.css";
import { useContext } from "react";
import AccessibilityContext from "../../../common.shared/contexts";

const CategoriesNavPicture = ({ category }) => {
  const { accessibilityMode } = useContext(AccessibilityContext);

  return (
    <img
      alt={`${category.name}`}
      className={`Categories-Nav__Picture Categories-Nav__Picture--status--${
        category.status
      } Categories-Nav__Picture--name--${
        category.name
      } Categories-Nav__Picture--direction--${category.direction} ${
        accessibilityMode ? "Categories-Nav__Picture--accessibility" : ""
      } }`}
      data-category={category.name}
      name={category.name}
      src={require(`./assets/${category.name}_${category.status}.png`)}
    />
  );
};

export default CategoriesNavPicture;
