import { NavLink } from "react-router-dom";
import Page404ButtonText from "../__ButtonText/Page404ButtonText";

const Page404Button = () => (
  <NavLink className="page-404__button" to="/">
    <Page404ButtonText />
  </NavLink>
);

export default Page404Button;
