import CategoriesNavLink from "../__Link/CategoriesNavLink";
import CategoriesNavPicture from "../__Picture/CategoriesNavPicture";

const CategoriesNavElement = ({ categoriesState, category }) => (
  <li className="Categories-Nav__Element">
    <CategoriesNavLink category={category} categoriesState={categoriesState}>
      <CategoriesNavPicture category={category} />
    </CategoriesNavLink>
  </li>
);

export default CategoriesNavElement;
