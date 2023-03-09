import NavBar from "../MainNav/MainNav";
import { Outlet } from "react-router-dom";

const AppWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppWrapper;
