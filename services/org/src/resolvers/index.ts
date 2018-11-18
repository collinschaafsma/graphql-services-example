import { Resolvers } from '../generated/graphqlgen'

import { Query } from './Query'
import { Mutation } from './Mutation'
import { Organization } from './Organization'


export const resolvers: Resolvers = {
  Query,
  Mutation,
  Organization,
}