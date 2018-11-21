import { MutationResolvers } from '../generated/graphqlgen';

export const Mutation: MutationResolvers.Type = {
  createProfile: async (parent, { firstName, lastName, avatarUri }, ctx) => {
    return ctx.db.createProfile({
      firstName,
      lastName,
      avatarUri,
    });
  },
  deleteProfile: async (parent, { id }, ctx) => {
    return ctx.db.deleteProfile({ id });
  }
}
