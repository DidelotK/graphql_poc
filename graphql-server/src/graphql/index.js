import { makeExecutableSchema } from 'graphql-tools/dist/index';
import typeDefs from './types';
import resolvers from './resolvers';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
