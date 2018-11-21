export const Mutation = {
  createOrganization: (_parent, { name }, ctx, info) => {
    return ctx.organizationService.mutation.createOrganization(
      {
        data: {
          name
        },
      },
      info,
    )
  },
}