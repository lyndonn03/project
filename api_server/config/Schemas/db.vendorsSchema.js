const mongoose = require('../db.config')

const Schema = mongoose.Schema

const VendorsSchema = new Schema({
    name: String,
    address: String,
    contact: {
        cell: String,
        tel: String
    },
    products: [Schema.Types.ObjectId]
})