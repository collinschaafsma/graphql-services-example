// Code generated by Prisma (prisma@1.20.7). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  profile: (where?: ProfileWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  profile: (where: ProfileWhereUniqueInput) => ProfilePromise;
  profiles: (
    args?: {
      where?: ProfileWhereInput;
      orderBy?: ProfileOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Profile>;
  profilesConnection: (
    args?: {
      where?: ProfileWhereInput;
      orderBy?: ProfileOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProfileConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProfile: (data: ProfileCreateInput) => ProfilePromise;
  updateProfile: (
    args: { data: ProfileUpdateInput; where: ProfileWhereUniqueInput }
  ) => ProfilePromise;
  updateManyProfiles: (
    args: { data: ProfileUpdateManyMutationInput; where?: ProfileWhereInput }
  ) => BatchPayloadPromise;
  upsertProfile: (
    args: {
      where: ProfileWhereUniqueInput;
      create: ProfileCreateInput;
      update: ProfileUpdateInput;
    }
  ) => ProfilePromise;
  deleteProfile: (where: ProfileWhereUniqueInput) => ProfilePromise;
  deleteManyProfiles: (where?: ProfileWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  profile: (
    where?: ProfileSubscriptionWhereInput
  ) => ProfileSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProfileOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "avatarUri_ASC"
  | "avatarUri_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ProfileWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ProfileWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  avatarUri?: String;
  avatarUri_not?: String;
  avatarUri_in?: String[] | String;
  avatarUri_not_in?: String[] | String;
  avatarUri_lt?: String;
  avatarUri_lte?: String;
  avatarUri_gt?: String;
  avatarUri_gte?: String;
  avatarUri_contains?: String;
  avatarUri_not_contains?: String;
  avatarUri_starts_with?: String;
  avatarUri_not_starts_with?: String;
  avatarUri_ends_with?: String;
  avatarUri_not_ends_with?: String;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: ProfileWhereInput[] | ProfileWhereInput;
  OR?: ProfileWhereInput[] | ProfileWhereInput;
  NOT?: ProfileWhereInput[] | ProfileWhereInput;
}

export interface ProfileCreateInput {
  firstName: String;
  lastName: String;
  avatarUri: String;
}

export interface ProfileUpdateInput {
  firstName?: String;
  lastName?: String;
  avatarUri?: String;
}

export interface ProfileUpdateManyMutationInput {
  firstName?: String;
  lastName?: String;
  avatarUri?: String;
}

export interface ProfileSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProfileWhereInput;
  AND?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
  OR?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
  NOT?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Profile {
  id: ID_Output;
  firstName: String;
  lastName: String;
  avatarUri: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ProfilePromise extends Promise<Profile>, Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  avatarUri: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProfileSubscription
  extends Promise<AsyncIterator<Profile>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  avatarUri: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProfileConnection {}

export interface ProfileConnectionPromise
  extends Promise<ProfileConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProfileEdge>>() => T;
  aggregate: <T = AggregateProfilePromise>() => T;
}

export interface ProfileConnectionSubscription
  extends Promise<AsyncIterator<ProfileConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProfileEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProfileSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileEdge {
  cursor: String;
}

export interface ProfileEdgePromise extends Promise<ProfileEdge>, Fragmentable {
  node: <T = ProfilePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProfileEdgeSubscription
  extends Promise<AsyncIterator<ProfileEdge>>,
    Fragmentable {
  node: <T = ProfileSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProfile {
  count: Int;
}

export interface AggregateProfilePromise
  extends Promise<AggregateProfile>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProfileSubscription
  extends Promise<AsyncIterator<AggregateProfile>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ProfileSubscriptionPayloadPromise
  extends Promise<ProfileSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProfilePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProfilePreviousValuesPromise>() => T;
}

export interface ProfileSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProfileSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProfileSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProfilePreviousValuesSubscription>() => T;
}

export interface ProfilePreviousValues {
  id: ID_Output;
  firstName: String;
  lastName: String;
  avatarUri: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ProfilePreviousValuesPromise
  extends Promise<ProfilePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  avatarUri: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProfilePreviousValuesSubscription
  extends Promise<AsyncIterator<ProfilePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  avatarUri: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Profile",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4468`
});
export const prisma = new Prisma();
