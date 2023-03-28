import { useEffect } from "react";
import {
  useLoaderData,
  useOutletContext,
  useSearchParams,
  Outlet,
} from "react-router-dom";
import { fetchCategoryItems } from "../database";
import ItemThumbnail from "./ItemThumbnail";
import NavButtons from "../NavButtons/NavButtons";

const Category = () => {
  const { category } = useLoaderData();
  const { setCurrentCategory, shopCategoryState } = useOutletContext();
  const [, setShopCategoryOpened] = shopCategoryState;
  const categoryItems = fetchCategoryItems(category);
  const maxItemsPerPage = 4;
  const totalNumberOfPages = Math.ceil(categoryItems.length / maxItemsPerPage);
  const pageReceived = Number(useSearchParams()[0].get("page"));
  const currentPage =
    pageReceived && pageReceived <= totalNumberOfPages ? pageReceived : 1;

  function currentItemsToDisplay() {
    const startIndex = (currentPage - 1) * maxItemsPerPage;
    const endIndex = startIndex + maxItemsPerPage;
    return categoryItems.slice(startIndex, endIndex);
  }

  useEffect(() => {
    setShopCategoryOpened(true);
    setCurrentCategory(category);
  }, [category, setCurrentCategory, setShopCategoryOpened]);

  return (
    <main aria-label="category" className={`category ${category}`}>
      {currentItemsToDisplay().map((item) => {
        return <ItemThumbnail item={item} key={item.sku} />;
      })}
      {totalNumberOfPages > 1 && (
        <NavButtons
          currentPage={currentPage}
          totalNumberOfPages={totalNumberOfPages}
        />
      )}
      <Outlet context={useOutletContext()} />
    </main>
  );
};

export default Category;
