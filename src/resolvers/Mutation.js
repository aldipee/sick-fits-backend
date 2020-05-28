const mutations = {
  async createItem(parent, arguments, context, info) {
    // DB bearasal dari  context di createServer

    // Db itu referensi nya adalaah file generated/prisma.graphql
    // dan mutations itu berasal dari type Mutation di file tersebut
    // dan createItem itu berasal dari mutation yang didefinisikan
    const items = await context.db.mutation.createItem(
      {
        data: { ...arguments },
      },
      info
    )
    return items
  },
}

module.exports = mutations
