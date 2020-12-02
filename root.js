const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

// model
const ClassModel = require("./model/class");
const ContentModel = require("./model/content");
const CourseModel = require("./model/course");
const QuizModel = require("./model/quiz");
const TaskModel = require("./model/task");

// type
const ClassType = require("./type/class");
const ContentType = require("./type/content");
const CourseType = require("./type/course");
const QuizType = require("./type/quiz");
const TaskType = require("./type/task");

const Root = new GraphQLObjectType({
  name: "Root",
  fields: {
    allCourse: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return CourseModel.find({ all: "true" });
      },
    },
    courseById: {
      type: CourseType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return CourseModel.findById(args._id);
      },
    },
    courseByType: {
      type: new GraphQLList(CourseType),
      args: { type: { type: GraphQLString } },
      resolve(parent, args) {
        return CourseModel.find({ type: args.type });
      },
    },
    allContent: {
      type: new GraphQLList(ContentType),
      resolve(parent, args) {
        return ContentModel.find({ all: "true" });
      },
    },
    contentById: {
      type: ContentType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return ContentModel.findById(args._id);
      },
    },
    quizById: {
      type: QuizType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return QuizModel.findById(args._id);
      },
    },
    allClass: {
      type: new GraphQLList(ClassType),
      resolve(parent, args) {
        return ClassModel.find({ all: "true" });
      },
    },
    classById: {
      type: ClassType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return ClassModel.findById(args._id);
      },
    },
    taskById: {
      type: TaskType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return TaskModel.findById(args._id);
      },
    },
  },
});

module.exports = Root;
