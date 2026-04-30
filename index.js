import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";

import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use(
  "/graphql",
  cors(),
  express.json(),
  expressMiddleware(server)
);

app.listen(4000, () => {
  console.log("🚀 Server running at http://localhost:4000/graphql");
});
