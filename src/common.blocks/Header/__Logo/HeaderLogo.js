import "./HeaderLogo.css";

const HeaderLogo = () => (
  <img
    alt={`The company's logo reads 'BLUE BOX SHOP'.`}
    className="Header__Logo"
    src={require("./HeaderLogo.png")}
  />
);

export default HeaderLogo;
