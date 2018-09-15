const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('./db.config')



// Validating function for the User
const validation = (data, user, pass) => {
    if( data.acc_user != user ) {
            return false
    } 

    if ( data.acc_pass != pass) {
        return false
    }

    return true
}


// Passport LocalStrategy
passport.use(new LocalStrategy(
    (username, password, done) => {

        db.select('*')
        .from('account')
        .where({acc_user: username})
        .then(data => {
            if(!data[0]) {
                return done(
                    null,
                    false,
                    {
                        message: 'No data found'
                    }
                )
            }
            if(!validation(data[0], username, password)) {
                console.log("this is data", data)
                return done(
                    null,
                    false,
                    {
                        message: 'Incorrect data'
                    }
                )
            } else {
                console.log("this is data[0]", data[0])
                return done(null, data[0])
            }
        })
        .catch(err => done(err))

    }
))


// Serializing and Deserializing Passport Entries
passport.serializeUser((user, done) => {
    done(null, user.acc_id)
})

passport.deserializeUser((id, done) => {
    db.select('*')
    .from('account')
    .where({acc_id : id})
    .then(data => {
        done(null, data[0])
    })
    .catch(err => done(err))
})



module.exports = passport;