const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString } = GraphQL;
const randomstring = require("randomstring");

// model
const CourseModel = require("./model/course");
const LearningPathModel = require("./model/learningpath");

// type
const CourseType = require("./type/course");
const LearningPathType = require("./type/learningpath");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    courseAdd: {
      type: CourseType,
      args: {
        type: { type: GraphQLString },
        title: { type: GraphQLString },
        start: { type: GraphQLString },
        duration: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const data = new CourseModel({
          _id: randomstring.generate(),
          type: args.type,
          title: args.title,
          start: args.start,
          duration: args.duration,
          description: args.description,
        });
        return data.save();
      },
    },
    learningPathAdd: {
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
        });
        return data.save();
      },
    },
  },
});

module.exports = Mutation;
