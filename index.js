const Express = require("express");
const GraphQLHTTP = require("express-graphql").graphqlHTTP;
const Mongoose = require("mongoose");
const Cors = require("cors");
const App = Express();

const Schema = require("./schema");

App.use(Cors());
App.use("/graphql", GraphQLHTTP({ schema: Schema, graphiql: true }));
App.listen(process.env.PORT || 4000, () => {
  console.log("Listening at port 4000");
});

Mongoose.connect(
  "mongodb://astiannisa:amalia@cluster-shard-00-00.9s8ns.mongodb.net:27017,cluster-shard-00-01.9s8ns.mongodb.net:27017,cluster-shard-00-02.9s8ns.mongodb.net:27017/skripsi?ssl=true&replicaSet=atlas-4pwa8m-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
Mongoose.connection.once("open", () => {
  console.log("Conneted to database");
});
