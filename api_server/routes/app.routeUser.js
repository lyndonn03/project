const UserSchema = require('../config/Schemas/db.userSchema')
const AccountSchema = require('../config/Schemas/db.accountSchema')
const mongoose = require('../config/db.config')
const registerUser = require('./helpers/registerUser')
const deleteUser = require('./helpers/deleteUser')
const message = require('./helpers/messageUser')
const passport = require('../config/db.passport')
const requireAuth = require('./helpers/requireAuth')
mongoose.Promise = require('bluebird')


module.exports = (app) => {
    /**
     *  Sign up route
     */
    app.post('/signup', (req, res) => {

        if(req.body.credentials === undefined) {
            return res.send(message("signup", "Error creating the user. Please try again"))
        }

        //User Credentials
        const data = new UserSchema(req.body)
        data._id = new mongoose.Types.ObjectId

        //Account Credentials
        const credential = new AccountSchema(req.body.credentials)
        credential.user_id = data._id

        //Register User function
        registerUser(data, credential, res)        
    })

    /**
     *  get users route
     */
    app.get('/users', requireAuth, (req, res) => {
        UserSchema.find({}, function(err, data) {
            if(err) {
                res.send(message("getUsers", "Error cannot fetch user lists"))
            }
            res.send(data)
        })
    })

    /**
     *  find a user
     */
    app.get('/user/:id', requireAuth, (req, res) => {
        UserSchema.findOne({_id: req.params.id}, function(err, data) {
            if(err) {
                return res.send(message("find", "Error finding the user specified"))
            }

            if(!data) {
                return res.status(404).send(message("find", "Cannot find the user specified"))
            }

            return res.send(data)
        })
    })

    /**
     *  delete a user
     */
    app.delete('/user/:id', requireAuth, (req, res) => {
        const id = req.params.id
        deleteUser(id, res)
    })

    /**
     *  update a user
     */
    app.patch('/user/:id', requireAuth, (req, res) => {
        const id = req.params.id
        UserSchema.findByIdAndUpdate(id, { $set: req.body}, { new: true }, function (err, user) {
            if (err) return res.send(message("update", "Error updating the user"));
            res.send(user);
          });
    })

    app.post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if(err) return res.send(err)

            if(!user) return res.status(401).send(err)

            req.logIn(user, (err) => {
                if(err) return  res.status(401).send(message("login", "Username or Password is incorrect. Please try again."))

                return res.send(message("login", "Login successfully.", true))
            })
        })(req, res, next)
    })

    app.get('/current_user', (req, res) => {
        res.send(req.user)
    })

    app.post('/logout', (req, res) => {
        req.logout()
        res.send(message("logout", "Successfully logout", true))
    })

}