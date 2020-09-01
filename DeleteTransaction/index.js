const dbClient = require('../shared/Mongo')
const { ObjectId } = require('mongodb')

module.exports = async function (context, req) {
  const { id } = req.params
  const { client: MongoClient } = dbClient
  await MongoClient.connect()
  const DB = MongoClient.db('DesafioFinalBootcampFullStack')
  const Transactions = DB.collection('transactions')
  await Transactions.findOneAndDelete({ _id: new ObjectId(id) })
  context.res = {
    status: 204,
  }
}
