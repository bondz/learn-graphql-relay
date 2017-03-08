const express = require('express');
const graphqlHTTP = require('express-graphql');

const Schema = require("./lib/schema").default;

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

app.listen(3001);
