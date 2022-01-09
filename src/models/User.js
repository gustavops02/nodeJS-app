
const mongoose = require('../database/index')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        minlength: 3,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 20,  
    },
    password: {
        type: String,
        select: false,
        required: true,
        minlength: 6,
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User