const mongoose = require('../db.config')

const Schema = mongoose.Schema

const ProductsSchema = new Schema({
    name: String,
    details: String,
    price: String,
    availability: Number,
    vendor: Schema.Types.ObjectId
})

module.exports = mongoose.model('Product', ProductsSchema)
