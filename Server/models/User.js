const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: Number, },
    isAdmin: { type: Boolean, default: false }
})

let user = mongoose.model("user", userSchema)

module.exports = { user }