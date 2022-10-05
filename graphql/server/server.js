const { ApolloServer } = require('apollo-server');
const {importSchema}  = require('graphql-import');
const resolvers = require('./resolvers');
const typeDefs = importSchema('./schema.graphql');

const server = new ApolloServer({typeDefs, resolvers})
server
  .listen({ port: 9000 })
  .then(serverInfo => console.log(`Server running at ${serverInfo.url}`));