const GraphQL = require("graphql");
const Mutation = require("./mutation");
const Root = require("./root");

module.exports = new GraphQL.GraphQLSchema({
  query: Root,
  mutation: Mutation,
});
