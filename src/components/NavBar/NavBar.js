import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/navbar/HomeIcon";
import ShopIcon from "../../assets/navbar/ShopIcon";
import CartIcon from "../../assets/navbar/CartIcon";

const NavBar = ({ cartLength }) => {
  return (
    <nav className="navbar" aria-label="navbar">
      <ul className="navbar__list" aria-label="navbar list">
        <li>
          <NavLink className="navbar__link" aria-label="navbar link" to="/">
            <HomeIcon />
          </NavLink>
        </li>

        <li>
          <NavLink className="navbar__link" aria-label="navbar link" to="/shop">
            <ShopIcon />
          </NavLink>
        </li>

        <li>
          {cartLength > 0 && (
            <span
              className="navbar__counter"
              aria-label="navbar counter"
              data-testid="navbar__counter"
            >
              {cartLength}
            </span>
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
