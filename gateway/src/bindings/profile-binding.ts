import { config } from '../utils/config'
import { Prisma } from 'prisma-binding'
import { typeDefs } from '../../../services/profile/src/generated/prisma-client/prisma-schema'

export const profileBinding = new Prisma({
  typeDefs,
  endpoint: config.profilePrismaServiceEndpoint,
  secret: config.profilePrismaServiceSecret,
});