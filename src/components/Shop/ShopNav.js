import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const ShopNav = () => {
  const { categoriesData, itemsData } = useLoaderData();
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
                state={itemsData}
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
