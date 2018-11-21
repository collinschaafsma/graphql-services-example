import { config } from '../utils/config'
import { Prisma } from 'prisma-binding'
import { typeDefs } from '../../../services/user/src/generated/prisma-client/prisma-schema'

export const userBinding = new Prisma({
  typeDefs,
  endpoint: config.userPrismaServiceEndpoint,
  secret: config.userPrismaServiceSecret,
});