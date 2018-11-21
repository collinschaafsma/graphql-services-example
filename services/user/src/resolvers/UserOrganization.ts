import { UserOrganizationResolvers } from '../generated/graphqlgen';

export const UserOrganization: UserOrganizationResolvers.Type = {
  ...UserOrganizationResolvers.defaultResolvers,
  createdAt: parent => parent.createdAt,
}
