const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const port = 4201;
const server = express();
const schema = require("./graphql/schema");
const { userLoader } = require("./graphql/loader/user.loader");

const corsOptions = {
  origin: "*",
};

server.use(cors(corsOptions));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
      loaders: { userLoader }
    }
  })
);

server.listen(port, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${port}/graphql`
  );
});
