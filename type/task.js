const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Class = require("../model/class");

const Task = new GraphQLObjectType({
  name: "Task",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    class: {
      type: new GraphQLList(require("./class")),
      resolve(parent, args) {
        return Class.find({ _id: parent.class });
      },
    },
    // dependency
  }),
});

module.exports = Task;
