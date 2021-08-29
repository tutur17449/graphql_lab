const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
} = require("graphql");
const UserType = require("../user/user.type");

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Represent post",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: {
      type: UserType,
      resolve: async (parent, { }, { loaders }) => {
        return await loaders.userLoader.load(parent.author)
      },
    },
  }),
});

const PostInputType = new GraphQLInputObjectType({
  name: "PostInput",
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: { type: GraphQLID },
  },
});

module.exports = {
  PostType,
  PostInputType,
};
