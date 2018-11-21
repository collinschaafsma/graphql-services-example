import { UserResolvers } from '../generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  createdAt: parent => parent.createdAt,
}
