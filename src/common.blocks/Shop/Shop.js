import "./Shop.css";
import { React } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import CategoriesNav from "../CategoriesNav/CategoriesNav";

const Shop = () => {
  const [categoryIsVisited] = useOutletContext().categoryVisitedState;

  return (
    <div aria-label="Shop page" className="Shop">
      {!categoryIsVisited && <CategoriesNav />}
      <Outlet context={useOutletContext()} />
    </div>
  );
};

export default Shop;
