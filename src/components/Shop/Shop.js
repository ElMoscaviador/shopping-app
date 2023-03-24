import { React } from "react";
import { useOutletContext, Outlet } from "react-router-dom";
import ShopNavBar from "./ShopNavBar";

const Shop = () => {
  const [shopCategoryOpened] = useOutletContext().shopCategoryState;

  return (
    <main aria-label="shop" className="shop">
      {!shopCategoryOpened && <ShopNavBar />}
      <Outlet context={useOutletContext()} />
    </main>
  );
};

export default Shop;
