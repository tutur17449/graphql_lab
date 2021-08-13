const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const postQuery = require("./post/post.query");
const userQuery = require("./user/user.query");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    ...postQuery,
    ...userQuery,
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root mutation",
  fields: () => ({}),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: RootMutationType
});

module.exports = schema;
