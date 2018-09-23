const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('./config/db.config')
const cookieSession = require('cookie-session')
const passport = require('./config/db.passport')
const app = express()
const cors = require('cors')



mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => {
    console.log('connected to the database');
})

app.use(cookieSession({
    secret: 'wews',
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())


require('./routes/app.routeUser')(app);

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})