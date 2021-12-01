require('dotenv/config')
require('module-alias/register')

const PORT = process.env.PORT || 4000

const express = require('express')
const http = require('http')

const startApolloServer = require('@/graphql/server')

const app = express()
const httpServer = http.createServer(app)
const server = startApolloServer(httpServer)

server.start().then(() => {
  server.applyMiddleware({
    app,
    path: '/graphql'
  })

  httpServer.listen({ port: PORT }, () => {
    // eslint-disable-next-line
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.graphqlPath}`)
  })
}).catch((err) => {
  // eslint-disable-next-line
  console.log('Server Start Error', err)
})
