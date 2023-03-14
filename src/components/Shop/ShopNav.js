import { NavLink } from "react-router-dom";
import { fetchCategoriesData } from "../data";

const ShopNav = () => {
  const categories = fetchCategoriesData();
  return (
    <aside className="shop__nav" aria-label="shop-nav">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              className="shop__nav__link"
              aria-label="shop-nav-link"
              to={`/shop/${category.id}`}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ShopNav;
