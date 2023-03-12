import { NavLink } from "react-router-dom";
import { data } from "./data";

const ShopNav = () => {
  const { categoriesData } = data;
  return (
    <aside className="shop__nav" aria-label="shop-nav">
      <ul>
        {categoriesData.map((category) => {
          return (
            <li key={category.id}>
              <NavLink
                className="shop__nav__link"
                aria-label="shop-nav-link"
                to={`/shop/${category.id}`}
              >
                {category.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ShopNav;
