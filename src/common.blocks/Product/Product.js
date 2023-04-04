import "./Product.css";
import { useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { fetchSingleProduct } from "../../common.shared/database";
import ProductPicture from "./__Picture/ProductPicture";
import ProductShowcase from "./__Showcase/ProductShowcase";

const Product = () => {
  const { category, sku } = useLoaderData();
  const { categoryVisitedState, setCurrentCategory } = useOutletContext();
  const [, setCategoryIsVisited] = categoryVisitedState;

  const product = fetchSingleProduct(sku);

  useEffect(() => {
    setCurrentCategory(category);
    setCategoryIsVisited(true);
  }, [setCategoryIsVisited, setCurrentCategory, category]);

  return (
    <main aria-label={`Product: ${product.name.short}`} className="Product">
      <ProductShowcase product={product} />
      <ProductPicture product={product} />
    </main>
  );
};

export default Product;
