const mongoose = require('../db.config')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        last: String,
        first: String,
        middle: String
    },
    email: String,
    address: {
        home: String,
        delivery: String
    },
    contact: {
        cell: String,
        tel: String
    },
    orderList: [
        Schema.Types.ObjectId
    ],
    birth: Date
})

module.exports = mongoose.model('User', UserSchema)