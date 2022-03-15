export const Query = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale) {
        filteredProducts = filteredProducts.filter(product => {
          return product.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter(product => {
          let sumRating = 0;
          let numberOfReviews = 0;

          reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;

          return avgProductRating >= avgRating;
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
