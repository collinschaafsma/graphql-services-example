import { QueryResolvers } from '../generated/graphqlgen';
import { getCurrentUser } from '../utils/authentication';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  currentUser: (parent, args, ctx) => {
    return ctx.db.user({ id: getCurrentUser(ctx) })
  },
  user: (parent, { id }, ctx) => {
    return ctx.db.user({ id })
  }
}
