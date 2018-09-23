const mongoose = require('../db.config')

const Schema = mongoose.Schema

const AccountSchema = Schema({
    username: String,
    password: String,
    user_id: Schema.Types.ObjectId,
    userRole: [String]
})

module.exports = mongoose.model('Account', AccountSchema)