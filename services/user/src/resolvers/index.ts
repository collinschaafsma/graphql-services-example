import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { User } from "./User";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";
import { UserOrganization } from "./UserOrganization";

export const resolvers: Resolvers = {
  Query,
  User,
  Mutation,
  AuthPayload,
  UserOrganization
}
