const { GraphQLInt, GraphQLString } = require("graphql");
const { createUser } = require("./user.actions");
const UserType = require("./user.type");
const short = require("short-uuid");

const userMutation = {
  createUser: {
    type: UserType,
    description: "Create new post",
    args: {
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
    },
    resolve: async (_, data) => {
      return await createUser({ id: short.generate(), ...data });
    },
  },
};

module.exports = userMutation;
