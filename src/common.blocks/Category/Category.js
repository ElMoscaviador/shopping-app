import "./Category.css";
import { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import currentProductsToDisplay from "./handlers";
import { fetchProductsInCategory } from "../../common.shared/database";
import NavArrows from "../NavArrows/NavArrows";
import ProductCard from "../ProductCard/ProductCard";

const Category = () => {
  const { category } = useLoaderData();
  const { setCurrentCategory, categoryVisitedState } = useOutletContext();
  const [, setCategoryIsVisited] = categoryVisitedState;
  const categoryProducts = fetchProductsInCategory(category);
  const maxProductsPerPage = 4;
  const pageReceived = Number(useSearchParams()[0].get("page"));
  const totalNumberOfPages = Math.ceil(
    categoryProducts.length / maxProductsPerPage
  );
  const currentPage =
    pageReceived && pageReceived <= totalNumberOfPages ? pageReceived : 1;

  useEffect(() => {
    setCategoryIsVisited(true);
    setCurrentCategory(category);
  }, [category, setCurrentCategory, setCategoryIsVisited]);

  return (
    <main
      aria-label={`${category} page`}
      className={`Category Category--name--${category}`}
    >
      {currentProductsToDisplay(
        categoryProducts,
        currentPage,
        maxProductsPerPage
      ).map((product) => (
        <ProductCard key={product.sku} product={product} withInfo />
      ))}
      {totalNumberOfPages > 1 && (
        <NavArrows
          currentPage={currentPage}
          totalNumberOfPages={totalNumberOfPages}
        />
      )}
      <Outlet context={useOutletContext()} />
    </main>
  );
};

export default Category;
