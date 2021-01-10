const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL;

const Course = require("../model/course");
const Materi = require("../model/materi");

const Bab = new GraphQLObjectType({
  name: "Bab",
  fields: () => ({
    // model
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    order: { type: GraphQLString },
    course: {
      type: new GraphQLList(require("./course")),
      resolve(parent, args) {
        return Course.find({ _id: parent.course });
      },
    },
    // dependency
    materi: {
      type: new GraphQLList(require("./materi")),
      resolve(parent, args) {
        return Materi.find({ bab: parent._id });
      },
    },
  }),
});

module.exports = Bab;
