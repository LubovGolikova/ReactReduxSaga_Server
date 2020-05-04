const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    } ,
    lastName: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    }
});

const User = mongoose.model('User', Schema);
module.exports = User;