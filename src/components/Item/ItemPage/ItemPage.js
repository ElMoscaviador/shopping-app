import { useLoaderData, useOutletContext } from "react-router-dom";
import ItemShowcase from "./ItemShowcase";
import ItemForm from "./ItemForm";

const ItemPage = () => {
  const sku = useLoaderData();
  const { fetchItems } = useOutletContext();
  const currentItemData = fetchItems("sku", sku);

  return (
    <main
      className="item-page"
      aria-label="item-page"
      data-testid={`item-page-${sku}`}
    >
      <ItemShowcase currentItemData={currentItemData} />
      <ItemForm sku={sku} />
    </main>
  );
};

export default ItemPage;
