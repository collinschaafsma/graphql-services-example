import { MutationResolvers } from '../generated/graphqlgen';

export const Mutation: MutationResolvers.Type = {
  createOrganization: async (parent, { name }, ctx) => {
    return ctx.db.createOrganization({
      name,
    });
  },
  deleteOrganization: async (parent, { id }, ctx) => {
    return ctx.db.deleteOrganization({ id });
  }
}
