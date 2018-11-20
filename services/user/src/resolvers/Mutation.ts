import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
  //...MutationResolvers.defaultResolvers,
  deleteUser: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  createUser: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  login: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
