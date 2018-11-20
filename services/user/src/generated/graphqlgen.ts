// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User, UserOrganization } from "./prisma-client";
import { AuthPayload } from "../types";
import { Context } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsUser {
    id: string;
  }

  export type CurrentUserResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type UserResolver = (
    parent: undefined,
    args: ArgsUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export interface Type {
    currentUser: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    user: (
      parent: undefined,
      args: ArgsUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    profileId: (parent: User) => parent.profileId,
    createdAt: (parent: User) => parent.createdAt,
    updatedAt: (parent: User) => parent.updatedAt
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ProfileIdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    profileId: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    createdAt: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    updatedAt: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsDeleteUser {
    id: string;
  }

  export interface ArgsCreateUser {
    email: string;
    password: string;
    profileId: string;
  }

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export type DeleteUserResolver = (
    parent: undefined,
    args: ArgsDeleteUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type CreateUserResolver = (
    parent: undefined,
    args: ArgsCreateUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => AuthPayload | Promise<AuthPayload>;

  export type LoginResolver = (
    parent: undefined,
    args: ArgsLogin,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => AuthPayload | Promise<AuthPayload>;

  export interface Type {
    deleteUser: (
      parent: undefined,
      args: ArgsDeleteUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    createUser: (
      parent: undefined,
      args: ArgsCreateUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AuthPayload | Promise<AuthPayload>;

    login: (
      parent: undefined,
      args: ArgsLogin,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AuthPayload | Promise<AuthPayload>;
  }
}

export namespace AuthPayloadResolvers {
  export const defaultResolvers = {
    token: (parent: AuthPayload) => parent.token,
    user: (parent: AuthPayload) => parent.user
  };

  export type TokenResolver = (
    parent: AuthPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserResolver = (
    parent: AuthPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export interface Type {
    token: (
      parent: AuthPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    user: (
      parent: AuthPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;
  }
}

export namespace UserOrganizationResolvers {
  export const defaultResolvers = {
    id: (parent: UserOrganization) => parent.id,
    userId: (parent: UserOrganization) => parent.userId,
    organizationId: (parent: UserOrganization) => parent.organizationId,
    createdAt: (parent: UserOrganization) => parent.createdAt
  };

  export type IdResolver = (
    parent: UserOrganization,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserIdResolver = (
    parent: UserOrganization,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type OrganizationIdResolver = (
    parent: UserOrganization,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver = (
    parent: UserOrganization,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: UserOrganization,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    userId: (
      parent: UserOrganization,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    organizationId: (
      parent: UserOrganization,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    createdAt: (
      parent: UserOrganization,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
  AuthPayload: AuthPayloadResolvers.Type;
  UserOrganization: UserOrganizationResolvers.Type;
}
