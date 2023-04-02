import "./NavBarIcon.css";
import NavBarIconCart from "./assets/NavBarIconCart";
import NavBarIconHome from "./assets/NavBarIconHome";
import NavBarIconShop from "./assets/NavBarIconShop";

const NavBarIcon = ({ section }) => {
  const icons = {
    "/": <NavBarIconHome />,
    cart: <NavBarIconCart />,
    shop: <NavBarIconShop />,
  };
  return icons[section];
};

export default NavBarIcon;
