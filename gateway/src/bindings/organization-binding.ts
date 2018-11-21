import { config } from '../utils/config'
import { Prisma } from 'prisma-binding'
import { typeDefs } from '../../../services/org/src/generated/prisma-client/prisma-schema'

export const organizationBinding = new Prisma({
  typeDefs,
  endpoint: config.organizationPrismaServiceEndpoint,
  secret: config.organizationPrismaServiceSecret,
});