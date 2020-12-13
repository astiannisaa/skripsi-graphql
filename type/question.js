const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Quiz = require("../model/quiz");

const Question = new GraphQLObjectType({
  name: "Question",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    order: { type: GraphQLString },
    question: { type: GraphQLString },
    answer: { type: GraphQLString },
    a: { type: GraphQLString },
    b: { type: GraphQLString },
    c: { type: GraphQLString },
    d: { type: GraphQLString },
    quiz: {
      type: new GraphQLList(require("./quiz")),
      resolve(parent, args) {
        return Quiz.find({ _id: parent.quiz });
      },
    },
    // dependency
  }),
});

module.exports = Question;
