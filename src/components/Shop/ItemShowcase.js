const ItemShowcase = ({ item }) => {
  return (
    <>
      <h1 aria-label="item title" className="item__title">
        {item.name.full.toUpperCase()}
      </h1>
      <p aria-label="item price" className="item__price">
        £{item.price}
      </p>
      <p aria-label="item description" className="item__description">
        {item.description}
      </p>
    </>
  );
};

export default ItemShowcase;
