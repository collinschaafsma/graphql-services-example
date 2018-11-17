export const typeDefs = /* GraphQL */ `type AggregateOrganization {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createOrganization(data: OrganizationCreateInput!): Organization!
  updateOrganization(data: OrganizationUpdateInput!, where: OrganizationWhereUniqueInput!): Organization
  updateManyOrganizations(data: OrganizationUpdateManyMutationInput!, where: OrganizationWhereInput): BatchPayload!
  upsertOrganization(where: OrganizationWhereUniqueInput!, create: OrganizationCreateInput!, update: OrganizationUpdateInput!): Organization!
  deleteOrganization(where: OrganizationWhereUniqueInput!): Organization
  deleteManyOrganizations(where: OrganizationWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Organization {
  id: ID!
  name: String!
}

type OrganizationConnection {
  pageInfo: PageInfo!
  edges: [OrganizationEdge]!
  aggregate: AggregateOrganization!
}

input OrganizationCreateInput {
  name: String!
}

type OrganizationEdge {
  node: Organization!
  cursor: String!
}

enum OrganizationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrganizationPreviousValues {
  id: ID!
  name: String!
}

type OrganizationSubscriptionPayload {
  mutation: MutationType!
  node: Organization
  updatedFields: [String!]
  previousValues: OrganizationPreviousValues
}

input OrganizationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrganizationWhereInput
  AND: [OrganizationSubscriptionWhereInput!]
  OR: [OrganizationSubscriptionWhereInput!]
  NOT: [OrganizationSubscriptionWhereInput!]
}

input OrganizationUpdateInput {
  name: String
}

input OrganizationUpdateManyMutationInput {
  name: String
}

input OrganizationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [OrganizationWhereInput!]
  OR: [OrganizationWhereInput!]
  NOT: [OrganizationWhereInput!]
}

input OrganizationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  organization(where: OrganizationWhereUniqueInput!): Organization
  organizations(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization]!
  organizationsConnection(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganizationConnection!
  node(id: ID!): Node
}

type Subscription {
  organization(where: OrganizationSubscriptionWhereInput): OrganizationSubscriptionPayload
}
`