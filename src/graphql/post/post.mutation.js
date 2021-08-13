const { GraphQLString, GraphQLID } = require("graphql");
const { createPost } = require("./post.actions");
const PostType = require("./post.type");
const short = require("short-uuid");

const postMutation = {
  createPost: {
    type: PostType,
    description: "Create new post",
    args: {
      title: { type: GraphQLString },
      content: { type: GraphQLString },
      author: { type: GraphQLID },
    },
    resolve: async (_, data) => {
      return await createPost({ id: short.generate(), ...data });
    },
  },
};

module.exports = postMutation;
