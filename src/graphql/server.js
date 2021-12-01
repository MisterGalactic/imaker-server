const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const { execute, subscribe } = require('graphql')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typeDefs = require('@/graphql/schemas')
const resolvers = require('@/graphql/resolvers')
const models = require('@/db/models')
const getMe = require('@/graphql/utils/getMe')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const startApolloServer = (httpServer) => {
  const subscriptionServer = SubscriptionServer.create({
    schema,
    execute,
    subscribe,
    onConnect: () => {
      // eslint-disable-next-line
      console.log('Connected to websocket')
    }
  }, {
    server: httpServer,
    path: '/graphql'
  })

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close()
            }
          }
        }
      }
    ],
    context: async ({ req }) => {
      const me = await getMe(req)

      return {
        models,
        me,
        secret: process.env.SECRET
      }
    },
    introspection: true
  })

  return server
}

module.exports = startApolloServer
