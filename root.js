const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

// model
const BabModel = require("./model/bab");
const ClassModel = require("./model/class");
const ContentModel = require("./model/content");
const CourseModel = require("./model/course");
const EnrollmentModel = require("./model/enrollment");
const InstructorModel = require("./model/instructor");
const MateriModel = require("./model/materi");
const QuizModel = require("./model/quiz");
const TaskModel = require("./model/task");
const UserModel = require("./model/user");

// type
const BabType = require("./type/bab");
const ClassType = require("./type/class");
const ContentType = require("./type/content");
const CourseType = require("./type/course");
const EnrollmentType = require("./type/enrollment");
const InstructorType = require("./type/instructor");
const MateriType = require("./type/materi");
const QuizType = require("./type/quiz");
const TaskType = require("./type/task");
const UserType = require("./type/user");

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
    babById: {
      type: BabType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return BabModel.findById(args._id);
      },
    },
    materiById: {
      type: MateriType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return MateriModel.findById(args._id);
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
    userByParam: {
      type: UserType,
      args: {
        _id: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, args) {
        if (args._id) return UserModel.findById(args._id);
        if (args.email) return UserModel.findOne({ email: args.email });
      },
    },
    enrollmentById: {
      type: EnrollmentType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return EnrollmentModel.findById(args._id);
      },
    },
    allEnrollment: {
      type: new GraphQLList(EnrollmentType),
      resolve(parent, args) {
        return EnrollmentModel.find({ all: "true" });
      },
    },
    instructorByParam: {
      type: InstructorType,
      args: {
        _id: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, args) {
        if (args._id) return InstructorModel.findById(args._id);
        if (args.email) return InstructorModel.findOne({ email: args.email });
      },
    },
    allInstructor: {
      type: new GraphQLList(InstructorType),
      resolve(parent, args) {
        return InstructorModel.find({ all: "true" });
      },
    },
  },
});

module.exports = Root;
