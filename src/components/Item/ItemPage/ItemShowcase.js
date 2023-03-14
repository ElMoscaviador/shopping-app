const ItemShowcase = ({ currentItemData }) => {
  const { name, price, img } = currentItemData;
  return (
    <>
      <h1 className="item-page__name" aria-label="item-page-name">
        {name}
      </h1>
      <img
        className="item-page__image"
        aria-label="item-page-image"
        alt="product"
        src={img.page[0]}
      />
      <p
        className="item-page__price"
        aria-label="item-page-price"
        data-testid="item-page-price"
      >
        ${price}
      </p>
    </>
  );
};

export default ItemShowcase;
