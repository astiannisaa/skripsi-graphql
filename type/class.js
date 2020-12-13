const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Course = require("../model/course");
const Enrollment = require("../model/enrollment");
const Task = require("../model/task");

const Class = new GraphQLObjectType({
  name: "Class",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    course: {
      type: new GraphQLList(require("./course")),
      resolve(parent, args) {
        return Course.find({ _id: parent.course });
      },
    },
    // dependency
    task: {
      type: new GraphQLList(require("./task")),
      resolve(parent, args) {
        return Task.find({ class: parent._id });
      },
    },
    enrollment: {
      type: new GraphQLList(require("./enrollment")),
      resolve(parent, args) {
        return Enrollment.find({ class: parent._id });
      },
    },
  }),
});

module.exports = Class;
