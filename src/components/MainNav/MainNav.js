import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav" aria-label="main-nav">
      <ul>
        <li>
          <NavLink
            className="main-nav__link"
            aria-label="main-nav-link"
            to="/"
          >
            Home
          </NavLink>
        </li>

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
          <NavLink className="main-nav__link" aria-label="main-nav-link">
            Search
          </NavLink>
        </li>

        <li>
          <NavLink
            className="main-nav__link"
            aria-label="main-nav-link"
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
