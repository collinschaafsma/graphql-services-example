import { config } from './utils/config';
import { logger } from './utils/logger';
import { GraphQLServer } from 'graphql-yoga';
import { userBinding } from './bindings/user-binding';
import { organizationBinding } from './bindings/organization-binding';
import { profileBinding } from './bindings/profile-binding';
import { resolvers } from './resolvers';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      userService: userBinding,
      organizationService: organizationBinding,
      profileService: profileBinding,
    }
  },
});

server.start(
  {
    port: config.port,
    tracing: config.tracing,
    cacheControl: config.cacheControl,
  },
  () => logger.log('info', 'GraphQL Gateway Server running on port %d', config.port)
);
