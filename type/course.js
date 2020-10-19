const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const LearningPath = require("../model/learningpath");

const Course = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    type: { type: GraphQLString },
    title: { type: GraphQLString },
    start: { type: GraphQLString },
    duration: { type: GraphQLString },
    description: { type: GraphQLString },
    // dependency
    learningpath: {
      type: new GraphQLList(require("./learningpath")),
      resolve(parent, args) {
        return LearningPath.find({ course: parent._id });
      },
    },
  }),
});

module.exports = Course;
