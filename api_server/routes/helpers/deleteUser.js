const message = require('./messageUser')

module.exports = (id, res) => {
    UserSchema.findOne({_id : id}, function(err,data) {
        if(err) {
           return res.send(message("delete", "Error Deleting the user"))
        }

        if(data === null) {
            console.log("data is null")
           return res.status(404).send(message("delete", "The user's id cannot be found. Please try again"))
        } 

        UserSchema.deleteOne({_id : id}, function(err, data) {
            if(err) {
                return res.send(message("delete", "Error deleting the user. Please try again"))
            }
            return res.send(message("delete", "The user is successfully deleted", true))
        })
    })
}