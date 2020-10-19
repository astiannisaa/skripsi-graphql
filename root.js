const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

// model
const CourseModel = require("./model/course");

// type
const CourseType = require("./type/course");

const Root = new GraphQLObjectType({
  name: "Root",
  fields: {
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
  },
});

module.exports = Root;
