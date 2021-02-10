const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Class = require("../model/class");

const Instructor = new GraphQLObjectType({
  name: "Instructor",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    // dependency
    class: {
      type: new GraphQLList(require("./class")),
      resolve(parent, args) {
        return Class.find({ instructor: parent._id });
      },
    },
  }),
});

module.exports = Instructor;
