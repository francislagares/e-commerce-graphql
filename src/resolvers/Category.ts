export const Category = {
  products: ({ id }, args, { products }) => {
    return products.filter(prod => prod.categoryId === id);
  },
};
