const { GraphQLList, GraphQLID } = require("graphql");
const PostType = require("./post.type");
const { getPostById, getPosts } = require("./post.actions");

const postQuery = {
  getPosts: {
    type: new GraphQLList(PostType),
    description: "Retrieve all post",
    resolve: async (_) => {
      return await getPosts();
    },
  },
  getPost: {
    type: PostType,
    description: "Retrieve single post",
    args: {
      id: { type: GraphQLID },
    },
    resolve: async (_, { id }) => {
      return await getPostById(id);
    },
  },
};

module.exports = postQuery;
