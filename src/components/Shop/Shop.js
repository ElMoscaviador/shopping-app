import { Outlet, useOutletContext } from "react-router-dom";
import ShopCategories from "./ShopNav";

const Shop = () => {
  return (
    <div className="shop" aria-label="shop">
      <ShopCategories />
      <Outlet context={useOutletContext()} />
    </div>
  );
};

export default Shop;
