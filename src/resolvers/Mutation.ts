import { v4 as uuid } from 'uuid';

export const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;

    const newCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
    const { name, image, price, onSale, quantity, categoryId } = input;

    const newProduct = {
      id: uuid(),
      name,
      image,
      price,
      onSale,
      quantity,
      categoryId,
    };

    products.push(newProduct);

    return newProduct;
  },
  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);

    return newReview;
  },
  deleteCategory: (parent, { id }, { categories, products }) => {
    categories = categories.filter(category => category.id !== id);
    products = products.map(product => {
      if (product.categoryId === id)
        return {
          ...products,
          categoryId: null,
        };
      else return product;
    });

    return true;
  },
};
