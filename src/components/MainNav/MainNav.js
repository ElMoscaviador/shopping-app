import { NavLink } from "react-router-dom";

const MainNav = ({ cartLength }) => {
  return (
    <nav className="main-nav" aria-label="main-nav">
      <ul className="main-nav__list" aria-label="main-nav-list">
        <li>
          <NavLink className="main-nav__link" aria-label="main-nav-link" to="/">
            Home
          </NavLink>
        </li>

        <div
          className="main-nav__list__right-group"
          aria-label="main-nav-list__right-group"
        >
          <li>
            <NavLink
              className="main-nav__link"
              aria-label="main-nav-link"
              to="/shop"
            >
              Shop
            </NavLink>
          </li>

          <li>
            {cartLength > 0 && (
              <span
                className="main-nav__cart-counter"
                aria-label="main-nav-cart-counter"
                data-testid="cart-counter"
              >
                {cartLength}
              </span>
            )}
            <NavLink
              className="main-nav__link"
              aria-label="main-nav-link"
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MainNav;
