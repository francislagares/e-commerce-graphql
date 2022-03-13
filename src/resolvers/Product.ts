export const Product = {
  category: ({ categoryId }: { categoryId: string }, args, { categories }) => {
    return categories.find(category => category.id === categoryId);
  },
  reviews: ({ id }: { id: string }, args, { reviews }) => {
    return reviews.filter(review => review.productId === id);
  },
};
