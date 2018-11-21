import { config } from './utils/config';
import { logger } from './utils/logger';
import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import { resolvers } from './resolvers';

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers as any,
  context: request => {
    return {
      ...request,
      db: prisma,
    }
  },
});

server.start(
  {
    port: config.port,
    tracing: config.tracing,
    cacheControl: config.cacheControl,
  },
  () => logger.log('info', 'GraphQL Server running on port %d', config.port)
);
