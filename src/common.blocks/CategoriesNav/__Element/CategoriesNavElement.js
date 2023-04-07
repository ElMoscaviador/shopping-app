import { useContext } from "react";
import AccessibilityContext from "../../../common.shared/contexts";
import CategoriesNavLink from "../__Link/CategoriesNavLink";
import CategoriesNavName from "../__Name/CategoriesNavName";
import CategoriesNavPicture from "../__Picture/CategoriesNavPicture";

const CategoriesNavElement = ({ categoriesState, category }) => {
  const { accessibilityMode } = useContext(AccessibilityContext);

  return (
    <li className="Categories-Nav__Element">
      <CategoriesNavLink category={category} categoriesState={categoriesState}>
        <CategoriesNavPicture
          accessibilityMode={accessibilityMode}
          category={category}
        />
      </CategoriesNavLink>
      {accessibilityMode && <CategoriesNavName name={category.name} />}
    </li>
  );
};

export default CategoriesNavElement;
