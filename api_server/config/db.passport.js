const passport = require('passport')
const AccountSchema = require('./Schemas/db.accountSchema')
const UserSchema = require('./Schemas/db.userSchema')
const LocalStrategy = require('passport-local').Strategy
const message = require('../routes/helpers/messageUser')
const validatePassword = require('../routes/helpers/loginUser')

passport.use(new LocalStrategy(
    (username, password, done) => {
        AccountSchema.findOne({ username: username }, (err, user) => {
            if(err) return done(message("login", "There is an error when logging in. Please try again"))

            if(!user) return done(message("login", "Username or Password is incorrect. Please try again"))

            if(!validatePassword(user.password, password)) return done(message("login", "Username or Password is incorrect. Please try again"))
            
            return done(null, user)
        })
    }
))

passport.serializeUser((user, done) => {
    done(null, user.user_id)
})

passport.deserializeUser((id, done) => {
    UserSchema.findOne({ _id : id}, (err, data) => {
        console.log("This is the data", data)
        done(err, data)
    })
})

module.exports = passport