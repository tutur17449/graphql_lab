const express = require('express')
const { graphqlHTTP } = require("express-graphql");
const port = 4201
const server = express()
const schema = require('./graphql/schema')

server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
)

server.listen(port, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)
})