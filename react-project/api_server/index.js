const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passportConfig = require('./config/passport.config')
const db = require('./config/db.config')

const app = express()


app.use(cookieSession({
    name: 'session',
    secret: 'thisismysecret',
    maxAge: 60 * 1000
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passportConfig.initialize())
app.use(passportConfig.session())


const validateAuth = (req, res, next) => {
    console.log("Tis is the user", req.user)
    if (! req.user ) {
        console.log("not permitted")
        return res.status(401).send({ error: "Not Authorized "})
    }

    next()
}

app.post('/auth', (req, res, next) => {
    console.log(req.body)
    passportConfig.authenticate('local', (err, user, info) => {
        if(err) {
            return next(err)
        }

        if(!user) {
            return res.json({success: false, message: 'Authentication Failed'})
        }

        req.login(user, (err) => {
            console.log(user)
            if(err) {
                return next(err);
            }

            return res.json({success: true, message: 'Authenticated'})
        })
    })(req, res, next);
})

app.get('/test', validateAuth, (req, res) => {
    console.log("accessing the protected route")
    db.select('*')
    .from('account')
    .where({acc_id : req.user.acc_id})
    .then(data => {
        return res.json(data[0])
    })
})

app.get('/current_user', (req, res) => {
    if(!req.user) {
        return res.status(401).send({ error: "Not Authorized "})
    }

    return res.send(req.user)
})


app.get('/logout', validateAuth, (req, res) => {
    req.logout()
    res.send({message: 'You are now logout. Pls log in to access a session'})
})

// app.get('/test', (req, res) => {
//     console.log(req.body)
//     res.json({shit: "hea"})
// }) 

app.listen(8080,
() => console.log("The server is up and running on port 5000"))