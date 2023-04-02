import "./HeaderTitle.css";
import generateCatchPhrase from "./handlers";

const HeaderTitle = ({ title }) => (
  <h1 className="Header__Title">
    {(title || generateCatchPhrase()).toUpperCase()}
  </h1>
);

export default HeaderTitle;
