const GraphQL = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
} = GraphQL;
const randomstring = require("randomstring");

// model
const BabModel = require("./model/bab");
const ClassModel = require("./model/class");
const ContentModel = require("./model/content");
const CourseModel = require("./model/course");
const EnrollmentModel = require("./model/enrollment");
const InstructorModel = require("./model/instructor");
const KeyFeatureModel = require("./model/keyfeature");
const LearningPathModel = require("./model/learningpath");
const MateriModel = require("./model/materi");
const QuestionModel = require("./model/question");
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
const KeyFeatureType = require("./type/keyfeature");
const LearningPathType = require("./type/learningpath");
const MateriType = require("./type/materi");
const QuestionType = require("./type/question");
const QuizType = require("./type/quiz");
const TaskType = require("./type/task");
const UserType = require("./type/user");

const TaskInput = new GraphQLInputObjectType({
  name: "TaskInput",
  fields: () => {
    return {
      _id: { type: GraphQLString },
    };
  },
});

const QuizInput = new GraphQLInputObjectType({
  name: "QuizInput",
  fields: () => {
    return {
      _id: { type: GraphQLString },
      score: { type: GraphQLString },
    };
  },
});

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
        order: { type: GraphQLString },
        title: { type: GraphQLString },
        course: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new QuizModel({
          _id: randomstring.generate(),
          order: args.order,
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
        order: { type: GraphQLString },
        title: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          order: args.order,
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
    bab_add: {
      type: BabType,
      args: {
        name: { type: GraphQLString },
        order: { type: GraphQLString },
        course: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new BabModel({
          _id: randomstring.generate(),
          name: args.name,
          order: args.order,
          course: args.course,
          all: "true",
        });
        return data.save();
      },
    },
    bab_update: {
      type: BabType,
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        order: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          name: args.name,
          order: args.order,
        };
        const data = BabModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    bab_delete: {
      type: BabType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = BabModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    materi_add: {
      type: MateriType,
      args: {
        name: { type: GraphQLString },
        content: { type: GraphQLString },
        order: { type: GraphQLString },
        bab: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new MateriModel({
          _id: randomstring.generate(),
          name: args.name,
          content: args.content,
          order: args.order,
          bab: args.bab,
          all: "true",
        });
        return data.save();
      },
    },
    materi_update: {
      type: MateriType,
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        content: { type: GraphQLString },
        order: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          name: args.name,
          content: args.content,
          order: args.order,
        };
        const data = MateriModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    materi_delete: {
      type: MateriType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = MateriModel.findByIdAndDelete(args._id);
        return data;
      },
    },
    class_add: {
      type: ClassType,
      args: {
        name: { type: GraphQLString },
        course: { type: GraphQLString },
        instructor: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new ClassModel({
          _id: randomstring.generate(),
          name: args.name,
          course: args.course,
          instructor: args.instructor,
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
        instructor: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          name: args.name,
          course: args.course,
          instructor: args.instructor,
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
        order: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        class: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new TaskModel({
          _id: randomstring.generate(),
          order: args.order,
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
        order: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          order: args.order,
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
    user_add: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phonenumber: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new UserModel({
          _id: randomstring.generate(),
          name: args.name,
          email: args.email,
          phonenumber: args.phonenumber,
          password: args.password,
          all: "true",
        });
        return data.save();
      },
    },
    user_update: {
      type: UserType,
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phonenumber: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          name: args.name,
          email: args.email,
          phonenumber: args.phonenumber,
          password: args.password,
        };
        const data = UserModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    enrollment_add: {
      type: EnrollmentType,
      args: {
        user: { type: GraphQLString },
        course: { type: GraphQLString },
        class: { type: GraphQLString },
        materi: { type: GraphQLString },
        task: { type: new GraphQLList(TaskInput) },
        quiz: { type: new GraphQLList(QuizInput) },
        status: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new EnrollmentModel({
          _id: randomstring.generate(),
          user: args.user,
          course: args.course,
          class: args.class,
          materi: args.materi,
          task: args.task,
          quiz: args.quiz,
          status: args.status,
          all: "true",
        });
        return data.save();
      },
    },
    enrollment_update: {
      type: EnrollmentType,
      args: {
        _id: { type: GraphQLString },
        status: { type: GraphQLString },
        class: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          status: args.status,
          class: args.class,
        };
        const data = EnrollmentModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    enrollment_materi: {
      type: EnrollmentType,
      args: {
        _id: { type: GraphQLString },
        materi: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          materi: args.materi,
        };
        const data = EnrollmentModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    enrollment_task: {
      type: EnrollmentType,
      args: {
        _id: { type: GraphQLString },
        task: { type: new GraphQLList(TaskInput) },
      },
      resolve(parent, args) {
        const update = {
          task: args.task,
        };
        const data = EnrollmentModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    enrollment_quiz: {
      type: EnrollmentType,
      args: {
        _id: { type: GraphQLString },
        quiz: { type: new GraphQLList(QuizInput) },
      },
      resolve(parent, args) {
        const update = {
          quiz: args.quiz,
        };
        const data = EnrollmentModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    instructor_add: {
      type: InstructorType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new InstructorModel({
          _id: randomstring.generate(),
          name: args.name,
          email: args.email,
          password: args.password,
          all: "true",
        });
        return data.save();
      },
    },
    instructor_update: {
      type: InstructorType,
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const update = {
          name: args.name,
          email: args.email,
          password: args.password,
        };
        const data = InstructorModel.findByIdAndUpdate(args._id, update, {
          new: true,
        });
        return data;
      },
    },
    instructor_delete: {
      type: InstructorType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        const data = InstructorModel.findByIdAndDelete(args._id);
        return data;
      },
    },
  },
});

module.exports = Mutation;
