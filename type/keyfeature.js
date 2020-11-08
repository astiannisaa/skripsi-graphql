const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Course = require("../model/course");

const KeyFeature = new GraphQLObjectType({
  name: "KeyFeature",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    order: { type: GraphQLString },
    title: { type: GraphQLString },
    course: {
      type: new GraphQLList(require("./course")),
      resolve(parent, args) {
        return Course.find({ _id: parent.course });
      },
    },
    // dependency
  }),
});

module.exports = KeyFeature;
