const mongoose = require('../db.config')
const Schema = mongoose.Schema

const OrdersSchema = new Schema({
    productOrdered: Schema.Types.ObjectId,
    userOrdered: Schema.Types.ObjectId
})

module.exports = mongoose.model('Order', OrdersSchema)