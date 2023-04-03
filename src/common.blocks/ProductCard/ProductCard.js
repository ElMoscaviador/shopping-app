import "./ProductCard.css";
import "./--location/ProductCard--location--cart.css";
import { addBEMClasses } from "../../common.shared/utils";
import { NavLink } from "react-router-dom";
import ProductCardPanel from "./__Panel/ProductCardPanel";
import ProductCardPicture from "./__Picture/ProductCardPicture";
import ProductCardInfo from "./__Info/ProductCardInfo";

const ProductCard = ({ product, additionalClasses }) => {
  return (
    <NavLink
      className={`Product-Card ${
        additionalClasses
          ? addBEMClasses(additionalClasses, "Product-Card")
          : ""
      }`}
      to={`${product.sku}`}
    >
      <ProductCardPanel position="front" />
      <ProductCardPicture product={product} />
      <ProductCardInfo product={product} />
      <ProductCardInfo product={product} transparent />
      <ProductCardPanel position="back" />
    </NavLink>
  );
};

export default ProductCard;
