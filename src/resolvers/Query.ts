export const Query = {
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter(product => {
          return product.onSale;
        });
      }
    }
    return filteredProducts;
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
