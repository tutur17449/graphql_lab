const { GraphQLInt } = require('graphql')
const PostType = require('./post.type')
const { getPostById } = require('./post.actions')

const postQuery = {
    getPost: {
        type: PostType,
        description: 'Retrieve single post',
        args: {
            id: { type: GraphQLInt }
        },
        resolve: async (_, { id }) => {
            return await getPostById(id)
        }
    }
}

module.exports = postQuery