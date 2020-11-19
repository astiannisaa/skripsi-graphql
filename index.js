const Cors = require("cors");
const Express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Mongoose = require("mongoose");
const Schema = require("./schema");

const App = Express();
App.use(Cors());
App.use("/graphql", graphqlHTTP({ schema: Schema, graphiql: true }));
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
