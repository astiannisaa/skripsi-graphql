const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString } = GraphQL;
const randomstring = require("randomstring");

// model
const CourseModel = require("./model/course");
const LearningPathModel = require("./model/learningpath");
const KeyFeatureModel = require("./model/keyfeature");
const ContentModel = require("./model/content");

// type
const CourseType = require("./type/course");
const LearningPathType = require("./type/learningpath");
const KeyFeatureType = require("./type/keyfeature");
const ContentType = require("./type/content");

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
  },
});

module.exports = Mutation;
