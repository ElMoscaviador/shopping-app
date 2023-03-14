import { useLoaderData, useOutletContext } from "react-router-dom";
import ItemThumbnail from "../Item/ItemThumbnail/ItemThumbnail";

const loader = ({ params }) => params.category;

const ShopCategory = () => {
  const category = useLoaderData();
  const { fetchItems } = useOutletContext();
  const itemsSKUs = fetchItems("category", category, "sku");

  return (
    <main
      className="shop__category"
      aria-label="shop-category"
      data-testid={category}
    >
      {itemsSKUs.map((sku) => {
        return <ItemThumbnail sku={sku} key={sku} />;
      })}
    </main>
  );
};

export default ShopCategory;
export { loader };
