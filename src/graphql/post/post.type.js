const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require("graphql");
const UserType = require('../user/user.type')
const { getUserById } = require('../user/user.actions')

const PostType = new GraphQLObjectType({
    name: "Post",
    description: "Represent post",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        author: { 
            type: UserType,
            resolve: async (parent) => {
                return await getUserById(parent.author)
            } 
        },
    })
})

module.exports = PostType