const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Course = require("../model/course");
const Question = require("../model/question");

const Quiz = new GraphQLObjectType({
  name: "Quiz",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    course: {
      type: new GraphQLList(require("./course")),
      resolve(parent, args) {
        return Course.find({ _id: parent.course });
      },
    },
    // dependency
    question: {
      type: new GraphQLList(require("./question")),
      resolve(parent, args) {
        return Question.find({ quiz: parent._id });
      },
    },
  }),
});

module.exports = Quiz;
