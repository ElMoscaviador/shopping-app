import { NavLink } from "react-router-dom";

const NavBar = ({ cartLength }) => {
  return (
    <nav className="main-nav" aria-label="main-nav">
      <ul className="main-nav__list" aria-label="main-nav-list">
        <li>
          <NavLink
            className="main-nav__link"
            aria-label="main-nav-link"
            to="/"
          ></NavLink>
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
            ></NavLink>
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
            ></NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
