import "./NavArrowPicture.css";
import "./--browse/NavArrowPicture--browse--previous.css";
import "./--browse/NavArrowPicture--browse--next.css";

const NavArrowPicture = ({ browsingDirection }) => (
  <img
    alt={`Browse to the ${browsingDirection} page`}
    className={`Nav-Arrow__Picture Nav-Arrow__Picture--browse--${browsingDirection}`}
    src={require(`./assets/${browsingDirection}.png`)}
  />
);

export default NavArrowPicture;
