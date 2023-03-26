import logo from "../../assets/shared/Logo.png";
import { generateCatchPhrase } from "../handlers";

const Header = ({ title }) => {
  return (
    <header className="header">
      <span aria-label="header title" className="header__title">
        {(title || generateCatchPhrase()).toUpperCase()}
      </span>
      <img
        aria-label="header logo"
        className="header__logo"
        src={logo}
        alt={`The shop's logo`}
      />
    </header>
  );
};

export default Header;
