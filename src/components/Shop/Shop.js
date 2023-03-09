import { Outlet, redirect } from "react-router-dom";
import ShopCategories from "./ShopNav";
import { data as shopData } from "./data";

const action = () => redirect("./shop");

const loader = async () => {
  return shopData;
};

const Shop = () => {
  return (
    <div className="shop" aria-label="shop">
      <ShopCategories />
      <Outlet />
    </div>
  );
};

export { action, loader };
export default Shop;
