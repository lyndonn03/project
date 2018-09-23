const message = require('./messageUser')

module.exports = (data, credential, res) => {
    data.save().then(()=> {
        credential.save()
    })
    .then(() => {
        return res.send(message("signup", "Successfully Signup", true))
    })
    .catch(function(err) {
        return res.send(message("signup", "Error Signing up. Please try again", false))
    })
}
