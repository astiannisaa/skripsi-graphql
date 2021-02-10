const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Class = require("../model/class");
const Course = require("../model/course");
const User = require("../model/user");

const TaskObject = new GraphQLObjectType({
  name: "TaskObject",
  fields: () => {
    return {
      _id: { type: GraphQLString },
    };
  },
});

const QuizObject = new GraphQLObjectType({
  name: "QuizObject",
  fields: () => {
    return {
      _id: { type: GraphQLString },
      score: { type: GraphQLString },
    };
  },
});

const Enrollment = new GraphQLObjectType({
  name: "Enrollment",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    user: {
      type: new GraphQLList(require("./user")),
      resolve(parent, args) {
        return User.find({ _id: parent.user });
      },
    },
    course: {
      type: new GraphQLList(require("./course")),
      resolve(parent, args) {
        return Course.find({ _id: parent.course });
      },
    },
    class: {
      type: new GraphQLList(require("./class")),
      resolve(parent, args) {
        return Class.find({ _id: parent.class });
      },
    },
    materi: { type: GraphQLString },
    task: { type: new GraphQLList(TaskObject) },
    quiz: { type: new GraphQLList(QuizObject) },
    status: { type: GraphQLString },
    // dependency
  }),
});

module.exports = Enrollment;
