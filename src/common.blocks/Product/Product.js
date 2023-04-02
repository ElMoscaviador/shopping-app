import "./Product.css";
import { useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { fetchSingleProduct } from "../../utils/database";
import ProductPicture from "./__Picture/ProductPicture";
import ProductShowcase from "./__Showcase/ProductShowcase";

const ShopProduct = () => {
  const { category, sku } = useLoaderData();
  const { categoryVisitedState, setCurrentCategory } = useOutletContext();
  const [, setCategoryIsVisited] = categoryVisitedState;

  const product = fetchSingleProduct(sku);

  useEffect(() => {
    setCurrentCategory(category);
    setCategoryIsVisited(true);
  }, [setCategoryIsVisited, setCurrentCategory, category]);

  return (
    <main className="Product">
      <ProductShowcase product={product} />
      <ProductPicture product={product} />
    </main>
  );
};

export default ShopProduct;
