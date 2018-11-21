import { OrganizationResolvers } from '../generated/graphqlgen';

export const Organization: OrganizationResolvers.Type = {
  ...OrganizationResolvers.defaultResolvers,
  createdAt: parent => parent.createdAt,
}
