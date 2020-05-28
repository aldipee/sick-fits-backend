const { forwardTo } = require('prisma-binding')
const Query = {
  items: forwardTo('db'),
  // async items(parent, argument, context, info) {
  //   console.log(context.db.query.items(), 'this is all data')
  //   const data = context.db.query.items()
  //   return data
  // },
}

module.exports = Query
