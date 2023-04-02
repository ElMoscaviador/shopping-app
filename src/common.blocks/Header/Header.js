import "./Header.css";
import HeaderLogo from "./__Logo/HeaderLogo";
import HeaderTitle from "./__Title/HeaderTitle";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <HeaderTitle title={title} />
      <HeaderLogo />
    </header>
  );
};

export default Header;
