const { GraphQLList, GraphQLID } = require("graphql");
const { getUserById, getUsers } = require("./user.actions");
const UserType = require("./user.type");

const userQuery = {
  getUsers: {
    type: new GraphQLList(UserType),
    description: "Retrieve all users",
    resolve: async (_) => {
      return await getUsers();
    },
  },
  getUser: {
    type: UserType,
    description: "Retrieve single user",
    args: {
      id: { type: GraphQLID },
    },
    resolve: async (_, { id }) => {
      return await getUserById(id);
    },
  },
};

module.exports = userQuery;
