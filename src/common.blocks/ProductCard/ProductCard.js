import "./ProductCard.css";
import "./--location/ProductCard--location--cart.css";
import "./--accessibility/ProductCard--accessibility.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { addBEMClasses } from "../../common.shared/utils";
import ProductCardPanel from "./__Panel/ProductCardPanel";
import ProductCardPicture from "./__Picture/ProductCardPicture";
import ProductCardInfo from "./__Info/ProductCardInfo";
import AccessibilityContext from "../../common.shared/contexts";

const ProductCard = ({ product, additionalClasses, withInfo }) => {
  const { accessibilityMode } = useContext(AccessibilityContext);

  return (
    <NavLink
      aria-label={`Open product page: ${product.name.short}`}
      className={`Product-Card ${
        additionalClasses
          ? addBEMClasses(additionalClasses, "Product-Card")
          : ""
      } ${accessibilityMode ? "Product-Card--accessibility" : ""}`}
      to={`${product.sku}`}
    >
      <ProductCardPanel position="front" />
      <ProductCardPicture product={product} />
      {withInfo && (
        <>
          <ProductCardInfo product={product} />
          <ProductCardInfo product={product} transparent />
        </>
      )}
      <ProductCardPanel position="back" />
    </NavLink>
  );
};

export default ProductCard;
