import { QueryResolvers } from "../generated/graphqlgen";

export const Query: QueryResolvers.Type = {
  organizations: (parent, args, ctx) => {
    return ctx.db.organizations();
  },
  organization: (parent, { id }, ctx) => {
    return ctx.db.organization({ id });
  }
};