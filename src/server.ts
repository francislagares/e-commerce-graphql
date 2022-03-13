import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/schema';
import { Query, Category, Product } from './resolvers';
import { categories } from './data/categories';
import { products } from './data/products';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories,
    products,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
