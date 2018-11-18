export const typeDefs = /* GraphQL */ `type AggregateUser {
  count: Int!
}

type AggregateUserOrganization {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserOrganization(data: UserOrganizationCreateInput!): UserOrganization!
  updateUserOrganization(data: UserOrganizationUpdateInput!, where: UserOrganizationWhereUniqueInput!): UserOrganization
  updateManyUserOrganizations(data: UserOrganizationUpdateManyMutationInput!, where: UserOrganizationWhereInput): BatchPayload!
  upsertUserOrganization(where: UserOrganizationWhereUniqueInput!, create: UserOrganizationCreateInput!, update: UserOrganizationUpdateInput!): UserOrganization!
  deleteUserOrganization(where: UserOrganizationWhereUniqueInput!): UserOrganization
  deleteManyUserOrganizations(where: UserOrganizationWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userOrganization(where: UserOrganizationWhereUniqueInput!): UserOrganization
  userOrganizations(where: UserOrganizationWhereInput, orderBy: UserOrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserOrganization]!
  userOrganizationsConnection(where: UserOrganizationWhereInput, orderBy: UserOrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserOrganizationConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userOrganization(where: UserOrganizationSubscriptionWhereInput): UserOrganizationSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  profileId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  profileId: ID!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  profileId_ASC
  profileId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserOrganization {
  id: ID!
  userId: ID!
  organizationId: ID!
  createdAt: DateTime!
}

type UserOrganizationConnection {
  pageInfo: PageInfo!
  edges: [UserOrganizationEdge]!
  aggregate: AggregateUserOrganization!
}

input UserOrganizationCreateInput {
  userId: ID!
  organizationId: ID!
}

type UserOrganizationEdge {
  node: UserOrganization!
  cursor: String!
}

enum UserOrganizationOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  organizationId_ASC
  organizationId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserOrganizationPreviousValues {
  id: ID!
  userId: ID!
  organizationId: ID!
  createdAt: DateTime!
}

type UserOrganizationSubscriptionPayload {
  mutation: MutationType!
  node: UserOrganization
  updatedFields: [String!]
  previousValues: UserOrganizationPreviousValues
}

input UserOrganizationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserOrganizationWhereInput
  AND: [UserOrganizationSubscriptionWhereInput!]
  OR: [UserOrganizationSubscriptionWhereInput!]
  NOT: [UserOrganizationSubscriptionWhereInput!]
}

input UserOrganizationUpdateInput {
  userId: ID
  organizationId: ID
}

input UserOrganizationUpdateManyMutationInput {
  userId: ID
  organizationId: ID
}

input UserOrganizationWhereInput {
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
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  organizationId: ID
  organizationId_not: ID
  organizationId_in: [ID!]
  organizationId_not_in: [ID!]
  organizationId_lt: ID
  organizationId_lte: ID
  organizationId_gt: ID
  organizationId_gte: ID
  organizationId_contains: ID
  organizationId_not_contains: ID
  organizationId_starts_with: ID
  organizationId_not_starts_with: ID
  organizationId_ends_with: ID
  organizationId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserOrganizationWhereInput!]
  OR: [UserOrganizationWhereInput!]
  NOT: [UserOrganizationWhereInput!]
}

input UserOrganizationWhereUniqueInput {
  id: ID
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  profileId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  profileId: ID
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  profileId: ID
}

input UserWhereInput {
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
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  profileId: ID
  profileId_not: ID
  profileId_in: [ID!]
  profileId_not_in: [ID!]
  profileId_lt: ID
  profileId_lte: ID
  profileId_gt: ID
  profileId_gte: ID
  profileId_contains: ID
  profileId_not_contains: ID
  profileId_starts_with: ID
  profileId_not_starts_with: ID
  profileId_ends_with: ID
  profileId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`