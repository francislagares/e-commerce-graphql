export const Product = {
  category: ({ categoryId }: { categoryId: string }, args, { categories }) => {
    return categories.find(category => category.id === categoryId);
  },
};
