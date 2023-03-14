import { Outlet } from "react-router-dom";
import { useState } from "react";
import { fetchItems } from "../data";
import MainNav from "../MainNav/MainNav";

const AppWrapper = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <MainNav cartLength={cart.length} />
      <Outlet context={{ cartState: [cart, setCart], fetchItems }} />
    </div>
  );
};

export default AppWrapper;
