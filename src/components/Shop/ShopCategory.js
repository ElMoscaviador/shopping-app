import { useLoaderData } from "react-router-dom";
import ItemThumbnail from "../Item/ItemThumbnail";
import { data } from "./data";

const loader = ({ params }) => {
  return params.categoryId;
};

const ShopCategory = () => {
  const categoryId = useLoaderData();
  const {itemsData} = data;

  return (
    <main
      className="shop__category"
      aria-label="shop-category"
      data-testid={categoryId}
    >
      {itemsData[categoryId].map((itemData) => (
        <ItemThumbnail
          categoryId={categoryId}
          itemData={itemData}
          key={itemData.name}
        />
      ))}
    </main>
  );
};

export default ShopCategory;
export { loader };
