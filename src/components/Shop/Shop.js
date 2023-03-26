import { React } from "react";
import { useOutletContext, Outlet } from "react-router-dom";
import ShopNavBar from "./ShopNavBar";

const Shop = () => {
  const [shopCategoryOpened] = useOutletContext().shopCategoryState;

  return (
    <div aria-label="shop" className="shop">
      {!shopCategoryOpened && <ShopNavBar />}
      <Outlet context={useOutletContext()} />
    </div>
  );
};

export default Shop;
