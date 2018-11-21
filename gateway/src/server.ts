import { config } from './utils/config'
import { logger } from './utils/logger'
import { GraphQLServer } from 'graphql-yoga'

const server = new GraphQLServer({
  context: request => {
    return {
      ...request,
    }
  },
})

server.start(
  {
    port: config.port,
    tracing: config.tracing,
    cacheControl: config.cacheControl,
  },
  () => logger.log('info', 'GraphQL Gateway Server running on port %d', config.port)
);