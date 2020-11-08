const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString } = GraphQL;

const Content = new GraphQLObjectType({
  name: "Content",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    order: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    // dependency
  }),
});

module.exports = Content;
