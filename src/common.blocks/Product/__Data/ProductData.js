import ProductTitle from "../__Title/ProductTitle";
import ProductPrice from "../__Price/ProductPrice";
import ProductDescription from "../__Description/ProductDescription";

const ProductData = ({ product }) => (
  <div className="Product__Data">
    <ProductTitle
      title={product.name.full}
      additionalClasses={{ modifiers: ["--location--shop"] }}
    />
    <ProductPrice
      price={product.price}
      additionalClasses={{ modifiers: ["--location--shop"] }}
    />
    <ProductDescription description={product.description} />
  </div>
);

export default ProductData;
