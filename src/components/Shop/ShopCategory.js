import { useLoaderData, useLocation } from "react-router-dom";
import ItemThumbnail from "../Item/ItemThumbnail";

const loader = ({ params }) => {
  return params.categoryId;
};

const ShopCategory = () => {
  const categoryId = useLoaderData();
  const categoryData = useLocation().state[categoryId];
  return (
    <main
      className="shop__category"
      aria-label="shop-category"
      data-testid={categoryId}
    >
      {categoryData.map((data) => (
        <ItemThumbnail categoryId={categoryId} data={data} key={data.name} />
      ))}
    </main>
  );
};

export default ShopCategory;
export { loader };
