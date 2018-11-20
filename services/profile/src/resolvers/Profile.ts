import { ProfileResolvers } from "../generated/graphqlgen";

export const Profile: ProfileResolvers.Type = {
  ...ProfileResolvers.defaultResolvers,
  createdAt: parent => parent.createdAt,
};