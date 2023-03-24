import { useEffect } from "react";
import {
  useLoaderData,
  useOutletContext,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { fetchCategoryItems } from "../database";
import ItemThumbnail from "./ItemThumbnail";
import NavButtons from "./NavButtons";

const Category = () => {
  const { category } = useLoaderData();
  const [, setShopCategoryOpened] = useOutletContext().shopCategoryState;

  const categoryItems = fetchCategoryItems(category);
  const currentPage = Number(useSearchParams()[0].get("page"));
  const maxItemsPerPage = 4;
  const totalNumberOfPages = Math.round(categoryItems.length / maxItemsPerPage);
  const shouldRedirect = !currentPage || currentPage > totalNumberOfPages;
  const navigate = useNavigate();

  function currentItemsToDisplay() {
    const startIndex = (currentPage - 1) * maxItemsPerPage;
    const endIndex = startIndex + maxItemsPerPage;
    return categoryItems.slice(startIndex, endIndex);
  }

  useEffect(() => {
    shouldRedirect && navigate("?page=1");
    setShopCategoryOpened(true)
  }, [navigate, shouldRedirect, setShopCategoryOpened]);

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
    </main>
  );
};

export default Category;
