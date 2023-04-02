function currentProductsToDisplay(
  categoryProducts,
  currentPage,
  maxProductsPerPage
) {
  const startIndex = (currentPage - 1) * maxProductsPerPage;
  const endIndex = startIndex + maxProductsPerPage;
  return categoryProducts.slice(startIndex, endIndex);
}

export default currentProductsToDisplay;
