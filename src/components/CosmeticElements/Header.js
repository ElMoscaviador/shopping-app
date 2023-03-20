import logo from "../../assets/shared/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt={`The shop's logo`} />
    </header>
  );
};

export default Header;
