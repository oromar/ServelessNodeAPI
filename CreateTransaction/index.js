const dbClient = require('../shared/Mongo')

module.exports = async function (context, req) {
  const { client: MongoClient } = dbClient
  await MongoClient.connect()
  const DB = MongoClient.db('DesafioFinalBootcampFullStack')
  const Transactions = DB.collection('transactions')
  await Transactions.insert({ ...req.body })
  context.res = {
    status: 201,
  }
}
