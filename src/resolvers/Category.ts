export const Category = {
  products: ({ id }: { id: string }, args, { products }) => {
    return products.filter(prod => prod.categoryId === id);
  },
};
