const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const postQuery = require('./post/post.query')

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root query",
    fields: () => ({
        ...postQuery
    })
})

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation",
    fields: () => ({})
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    // mutation: RootMutationType
})

module.exports = schema