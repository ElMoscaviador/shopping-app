import MainNav from "../MainNav/MainNav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const AppWrapper = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <MainNav cartLength={cart.length} />
      {<Outlet context={{ cartState: [cart, setCart] }} />}
    </div>
  );
};

export default AppWrapper;
