import "./Page404Button.css";
import { NavLink } from "react-router-dom";
import Page404ButtonText from "../__ButtonText/Page404ButtonText";

const Page404Button = () => (
  <NavLink className="Page-404__Button" to="/">
    <Page404ButtonText />
  </NavLink>
);

export default Page404Button;
