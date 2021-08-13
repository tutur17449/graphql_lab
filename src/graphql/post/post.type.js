const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const UserType = require("../user/user.type");
const { getUserById } = require("../user/user.actions");

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Represent post",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: {
      type: UserType,
      resolve: async (parent) => {
        return await getUserById(parent.author);
      },
    },
  }),
});

module.exports = PostType;
