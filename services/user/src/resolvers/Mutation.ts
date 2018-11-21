import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { APP_SECRET } from '../utils/authentication';
import { MutationResolvers } from '../generated/graphqlgen';

export const Mutation: MutationResolvers.Type = {
  //...MutationResolvers.defaultResolvers,
  deleteUser: (parent, { id }, ctx) => {
    return ctx.db.deleteUser({ id });
  },
  createUser: async (parent, { email, password, profileId }, ctx) => {
    const hashedPassword = await hash(password, 10)
    const user = await ctx.db.createUser({
      email,
      password: hashedPassword,
      profileId,
    })

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },
  login: async (parent, { email, password }, ctx) => {
    const user = await ctx.db.user({ email })

    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }

    const valid = await compare(password, user.password)

    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    }
  }
}
