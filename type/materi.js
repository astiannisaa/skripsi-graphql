const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Bab = require("../model/bab");

const Materi = new GraphQLObjectType({
  name: "Materi",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    content: { type: GraphQLString },
    order: { type: GraphQLString },
    bab: {
      type: new GraphQLList(require("./bab")),
      resolve(parent, args) {
        return Bab.find({ _id: parent.bab });
      },
    },
    // dependency
  }),
});

module.exports = Materi;
