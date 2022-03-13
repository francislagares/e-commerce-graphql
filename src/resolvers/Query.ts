export const Query = {
  products: (parent, args, { products }) => {
    return products;
  },
  product: (parent, { id }: { id: string }, { products }) => {
    const product = products.find(prod => prod.id === id);

    if (!product) return null;

    return product;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }: { id: string }, { categories }) => {
    const category = categories.find(cat => cat.id === id);

    if (!category) return null;

    return category;
  },
};
