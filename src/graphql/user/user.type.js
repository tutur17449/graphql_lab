const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  description: "Represent user",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

module.exports = UserType;
