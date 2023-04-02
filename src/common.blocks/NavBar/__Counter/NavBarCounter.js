import "./NavBarCounter.css";
import NavBarCounterText from "../__Counter-Text/NavBarCounterText";

const NavBarCounter = ({ cartLength }) => (
  <div className="Nav-Bar__Counter">
    <NavBarCounterText cartLength={cartLength} />
  </div>
);

export default NavBarCounter;
