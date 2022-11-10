const mongoose = require("mongoose")
const {Schema, model} = mongoose


const userSchema = new Schema({
    userName: String,
    email : String,
    password : String,
})

const User = model("Users", userSchema)

module.exports = User 