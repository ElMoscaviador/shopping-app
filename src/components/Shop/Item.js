import { useLoaderData, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { fetchSpecificItem } from "../database";
import ItemShowcase from "./ItemShowcase";
import ItemForm from "./ItemForm";

const Item = () => {
  const { category, sku } = useLoaderData();
  const { shopCategoryState, setCurrentCategory } = useOutletContext();
  const [, setShopCategoryOpened] = shopCategoryState;

  const item = fetchSpecificItem(sku);

  useEffect(() => {
    setCurrentCategory(category);
    setShopCategoryOpened(true);
  }, [setShopCategoryOpened, setCurrentCategory, category]);

  return (
    <main aria-label="item" className="item">
      <div aria-label="item left" className="item__left">
        <ItemShowcase item={item} />
        <ItemForm sku={sku} />
      </div>

      <img
        aria-label="item picture"
        className={`item__picture ${sku}`}
        src={require(`../../assets/products/page/${item.sku}.png`)}
      />
    </main>
  );
};

export default Item;
