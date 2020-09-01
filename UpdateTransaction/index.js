const dbClient = require('../shared/Mongo')
const { ObjectId } = require('mongodb')

module.exports = async function (context, req) {
  const { id } = req.params
  const transaction = req.body
  const { client: MongoClient } = dbClient
  await MongoClient.connect()
  const DB = MongoClient.db('DesafioFinalBootcampFullStack')
  const Transactions = DB.collection('transactions')
  await Transactions.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: transaction }
  )
  context.res = {
    status: 200,
  }
}
