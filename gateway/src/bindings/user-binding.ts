import { Prisma } from 'prisma-binding'
import { typeDefs } from '../../../services/user/src/generated/prisma-client/prisma-schema'

export const userBinding = new Prisma({
  typeDefs,
  endpoint: 'http://localhost:4466',
  secret: 'mysecret42'
})