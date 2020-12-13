const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Enrollment = require("../model/enrollment");

const User = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phonenumber: { type: GraphQLString },
    password: { type: GraphQLString },
    // dependency
    enrollment: {
      type: new GraphQLList(require("./enrollment")),
      resolve(parent, args) {
        return Enrollment.find({ user: parent._id });
      },
    },
  }),
});

module.exports = User;
