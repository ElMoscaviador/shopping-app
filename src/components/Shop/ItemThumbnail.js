const ItemThumbnail = ({ item }) => {
  return (
    <div aria-label="item-thumbnail" className="item-thumbnail">
      <img
        alt="item thumbnail"
        aria-label="item thumbnail image"
        className="item-thumbnail__image"
        src={require(`../../assets/products/thumbnail/${item.sku}.png`)}
      />
      <div aria-label="item thumbnail info" className="item-thumbnail__info">
        <span aria-label="item thumbnail name" className="item-thumbnail__name">
          {item.name}
        </span>
        <span
          aria-label="item thumbnail price"
          className="item-thumbnail__price"
        >
          £{item.price}
        </span>
      </div>
    </div>
  );
};

export default ItemThumbnail;
