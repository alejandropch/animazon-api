const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")
const { animals, mainCards, categories } = require("./db")

const typeDefs = require("./schema")
const resolvers = require("./resolvers")
const app = express()
const PORT = 3000

async function start() {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: {
        animals,
        mainCards,
        categories,
      },
    })
    await server.start()
    server.applyMiddleware({ app })
    app.listen(PORT, () => console.log("listeng on port:", PORT))
  } catch (e) {
    console.log(e)
  }
}

start()
