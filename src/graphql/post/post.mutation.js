const { GraphQLString, GraphQLID } = require("graphql");
const {
  createPost,
  updatePost,
  getPostById,
  deletePost,
} = require("./post.actions");
const { PostType, PostInputType } = require("./post.type");
const short = require("short-uuid");

const postMutation = {
  createPost: {
    type: PostType,
    description: "Create new post",
    args: {
      postData: { type: PostInputType },
    },
    resolve: async (_, data) => {
      return await createPost({ id: short.generate(), ...data });
    },
  },
  updatePost: {
    type: PostType,
    description: "Update single post",
    args: {
      id: { type: GraphQLID },
      postData: { type: PostInputType },
    },
    resolve: async (_, { id, postData }) => {
      const post = await getPostById(id);
      if (Object.keys(post).length === 0) {
        throw new Error("Post not found");
      }
      return await updatePost(id, {
        ...post,
        ...postData,
      });
    },
  },
  deletePost: {
    type: PostType,
    description: "Delete single post",
    args: {
      id: { type: GraphQLID },
    },
    resolve: async (_, { id }) => {
      const post = await getPostById(id);
      if (Object.keys(post).length === 0) {
        throw new Error("Post not found");
      }
      await deletePost(id);
      return post;
    },
  },
};

module.exports = postMutation;
