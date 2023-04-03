function currentProductsToDisplay(cart, currentPage, maxProductsPerPage) {
  const startIndex = (currentPage - 1) * maxProductsPerPage;
  const endIndex = startIndex + maxProductsPerPage;
  return cart.slice(startIndex, endIndex);
}

export default currentProductsToDisplay;
