import { Prisma } from 'prisma-binding'
import { typeDefs } from '../../../services/profile/src/generated/prisma-client/prisma-schema'

export const profileBinding = new Prisma({
  typeDefs,
  endpoint: 'http://localhost:4468',
  secret: 'mysecret42'
});