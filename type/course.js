const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const KeyFeature = require("../model/keyfeature");
const LearningPath = require("../model/learningpath");
const Quiz = require("../model/quiz");

const Course = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    type: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    // dependency
    learningpath: {
      type: new GraphQLList(require("./learningpath")),
      resolve(parent, args) {
        return LearningPath.find({ course: parent._id });
      },
    },
    keyfeature: {
      type: new GraphQLList(require("./keyfeature")),
      resolve(parent, args) {
        return KeyFeature.find({ course: parent._id });
      },
    },
    quiz: {
      type: new GraphQLList(require("./quiz")),
      resolve(parent, args) {
        return Quiz.find({ course: parent._id });
      },
    },
  }),
});

module.exports = Course;
