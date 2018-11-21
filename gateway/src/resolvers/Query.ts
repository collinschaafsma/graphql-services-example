export const Query = {
  organizations: async (_parent, _args, ctx, info) => {
    return await ctx.organizationService.query.organizations({}, info)
  },
}