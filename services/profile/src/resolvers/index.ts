import { Resolvers } from '../generated/graphqlgen';

import { Query } from './Query';
import { Mutation } from './Mutation';
import { Profile } from './Profile';


export const resolvers: Resolvers = {
  Query,
  Mutation,
  Profile,
}
