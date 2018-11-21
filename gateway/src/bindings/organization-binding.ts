import { Prisma } from 'prisma-binding'
import { typeDefs } from '../../../services/org/src/generated/prisma-client/prisma-schema'

export const organizationBinding = new Prisma({
  typeDefs,
  endpoint: 'http://localhost:4467',
  secret: 'mysecret42'
})