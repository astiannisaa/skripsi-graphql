const GraphQL = require("graphql");
const Root = require("./root");
const Mutation = require("./mutation");

module.exports = new GraphQL.GraphQLSchema({
  query: Root,
  mutation: Mutation,
});
