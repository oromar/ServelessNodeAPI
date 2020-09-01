const dbClient = require('../shared/Mongo')

module.exports = async function (context, req) {
  const { client: MongoClient } = dbClient
  await MongoClient.connect()
  const DB = MongoClient.db('DesafioFinalBootcampFullStack')
  const Transactions = DB.collection('transactions')
  const res = Transactions.find({})
  const body = await res.toArray()
  context.res = {
    status: 200,
    body,
  }
}
