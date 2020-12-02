const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString } = GraphQL;
const randomstring = require("randomstring");

// model
const ClassModel = require("./model/class");
const ContentModel = require("./model/content");
const CourseModel = require("./model/course");
const KeyFeatureModel = require("./model/keyfeature");
const LearningPathModel = require("./model/learningpath");
const QuestionModel = require("./model/question");
const QuizModel = require("./model/quiz");
const TaskModel = require("./model/task");

// type
const ClassType = require("./type/class");
const ContentType = require("./type/content");
const CourseType = require("./type/course");
const KeyFeatureType = require("./type/keyfeature");
const LearningPathType = require("./type/learningpath");
const QuestionType = require("./type/question");
const QuizType = require("./type/quiz");
const TaskType = require("./type/task");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    course_add: {
      type: CourseType,
      args: {
        type: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new CourseModel({
          _id: randomstring.generate(),
          type: args.type,
          title: args.title,
          description: args.description,
          all: "true",
        });
        return data.save();
      },
    },
    course_update: {
      type: CourseType,
      args: {
        _id: { type: GraphQLString },
        type: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          type: args.type,
          title: args.title,
          description: args.description,
        };
        const data = CourseModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    course_delete: {
      type: CourseType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = CourseModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    learningpath_add: {
      type: LearningPathType,
      args: {
        order: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        course: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new LearningPathModel({
          _id: randomstring.generate(),
          order: args.order,
          title: args.title,
          description: args.description,
          course: args.course,
          all: "true",
        });
        return data.save();
      },
    },
    learningpath_delete: {
      type: LearningPathType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = LearningPathModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    keyfeature_add: {
      type: KeyFeatureType,
      args: {
        order: { type: GraphQLString },
        title: { type: GraphQLString },
        course: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new KeyFeatureModel({
          _id: randomstring.generate(),
          order: args.order,
          title: args.title,
          course: args.course,
          all: "true",
        });
        return data.save();
      },
    },
    keyfeature_delete: {
      type: KeyFeatureType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = KeyFeatureModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    content_add: {
      type: ContentType,
      args: {
        order: { type: GraphQLString },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new ContentModel({
          _id: randomstring.generate(),
          order: args.order,
          title: args.title,
          content: args.content,
          all: "true",
        });
        return data.save();
      },
    },
    content_update: {
      type: ContentType,
      args: {
        _id: { type: GraphQLString },
        order: { type: GraphQLString },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          order: args.order,
          title: args.title,
          content: args.content,
        };
        const data = ContentModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    content_delete: {
      type: ContentType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = ContentModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    quiz_add: {
      type: QuizType,
      args: {
        title: { type: GraphQLString },
        course: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new QuizModel({
          _id: randomstring.generate(),
          title: args.title,
          course: args.course,
          all: "true",
        });
        return data.save();
      },
    },
    quiz_update: {
      type: QuizType,
      args: {
        _id: { type: GraphQLString },
        title: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          title: args.title,
        };
        const data = QuizModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    quiz_delete: {
      type: QuizType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = QuizModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    question_add: {
      type: QuestionType,
      args: {
        order: { type: GraphQLString },
        question: { type: GraphQLString },
        answer: { type: GraphQLString },
        a: { type: GraphQLString },
        b: { type: GraphQLString },
        c: { type: GraphQLString },
        d: { type: GraphQLString },
        quiz: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new QuestionModel({
          _id: randomstring.generate(),
          order: args.order,
          question: args.question,
          answer: args.answer,
          a: args.a,
          b: args.b,
          c: args.c,
          d: args.d,
          quiz: args.quiz,
          all: "true",
        });
        return data.save();
      },
    },
    question_delete: {
      type: QuestionType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = QuestionModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    class_add: {
      type: ClassType,
      args: {
        name: { type: GraphQLString },
        course: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new ClassModel({
          _id: randomstring.generate(),
          name: args.name,
          course: args.course,
          all: "true",
        });
        return data.save();
      },
    },
    class_update: {
      type: ClassType,
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        course: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          name: args.name,
          course: args.course,
        };
        const data = ClassModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    class_delete: {
      type: ClassType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = ClassModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    task_add: {
      type: TaskType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        class: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new TaskModel({
          _id: randomstring.generate(),
          title: args.title,
          description: args.description,
          class: args.class,
          all: "true",
        });
        return data.save();
      },
    },
    task_update: {
      type: TaskType,
      args: {
        _id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          title: args.title,
          description: args.description,
        };
        const data = TaskModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    task_delete: {
      type: TaskType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = TaskModel.findByIdAndDelete(args._id);
        return data;
      },
    },
  },
});

module.exports = Mutation;
