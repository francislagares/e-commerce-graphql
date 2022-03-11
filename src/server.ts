import { ApolloServer, gql } from 'apollo-server';
import { products } from './data/products';
import { categories } from './data/categories';

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
  }

  type Category {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    products: () => {
      return products;
    },
    product: (parent, args: { id: string }, context) => {
      const { id } = args;

      const product = products.find(prod => prod.id === id);

      if (!product) return null;

      return product;
    },
    categories: () => categories,
    category: (parent, args: { id: string }, context) => {
      const { id } = args;

      const category = categories.find(cat => cat.id === id);

      if (!category) return null;

      return category;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
