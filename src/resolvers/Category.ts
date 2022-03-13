export const Category = {
  products: ({ id }: { id: string }, { filter }, { products }) => {
    const categoryProducts = products.filter(prod => prod.categoryId === id);
    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(product => {
          return product.onSale;
        });
      }
    }
    return filteredCategoryProducts;
  },
};
