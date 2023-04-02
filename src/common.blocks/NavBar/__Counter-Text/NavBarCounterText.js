import "./NavBarCounterText.css";
const NavBarCounterText = ({ cartLength }) => (
  <span aria-label={`${cartLength} in cart`} className="Nav-Bar__Counter-Text">
    {cartLength}
  </span>
);

export default NavBarCounterText;
