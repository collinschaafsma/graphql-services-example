import { QueryResolvers } from "../generated/graphqlgen";

export const Query: QueryResolvers.Type = {
  profiles: (parent, args, ctx) => {
    return ctx.db.profiles();
  },
  profile: (parent, { id }, ctx) => {
    return ctx.db.profile({ id });
  }
};