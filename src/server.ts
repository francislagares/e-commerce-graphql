import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/schema';
import { Query, Mutation, Category, Product } from './resolvers';
import { categories } from './data/categories';
import { products } from './data/products';
import { reviews } from './data/reviews';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
