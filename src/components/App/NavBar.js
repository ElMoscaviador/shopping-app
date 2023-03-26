import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/navbar/HomeIcon";
import ShopIcon from "../../assets/navbar/ShopIcon";
import CartIcon from "../../assets/navbar/CartIcon";
import ShopNavBar from "../Shop/ShopNavBar";

const NavBar = ({ cartLength, setCurrentCategory, shopCategoryState }) => {
  const [shopCategoryOpened, setShopCategoryOpened] = shopCategoryState;

  return (
    <nav
      className={`navbar ${shopCategoryOpened ? "with-categories" : ""}`}
      aria-label="navbar"
    >
      {shopCategoryOpened && <ShopNavBar />}

      <ul className={`navbar__list`} aria-label="navbar list">
        <li>
          <NavLink
            className="navbar__link"
            aria-label="navbar link"
            to="/"
            onClick={() => {
              setShopCategoryOpened(false);
              setCurrentCategory("");
            }}
          >
            <HomeIcon />
          </NavLink>
        </li>

        <li>
          <NavLink
            className="navbar__link"
            aria-label="navbar link"
            to="/shop"
            onClick={() => {
              setShopCategoryOpened(false);
              setCurrentCategory("");
            }}
          >
            <ShopIcon />
          </NavLink>
        </li>

        <li>
          {cartLength > 0 && (
            <div className="navbar__counter" aria-label="navbar counter">
              <span
                className="navbar__counter-text"
                aria-label="navbar counter tetx"
              >
                {cartLength}
              </span>
            </div>
          )}
          <NavLink className="navbar__link" aria-label="navbar link" to="/cart">
            <CartIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
