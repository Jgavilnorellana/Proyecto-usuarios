const mongoose = require('mongoose')

const Users = mongoose.model('User', {
    email: { type: String, required: true , minLength:5 },
    password: { type: String, required: true },
    salt: { type: String, required: true },
})

module.exports = Users