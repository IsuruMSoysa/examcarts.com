const mongoose = require('mongoose');

const instructorLoginDetailsSchema = new mongoose.Schema({
    fullName: String,
    mobile: String,
    email: String,
    username: String,
    password: String
});

module.exports = mongoose.model('LoginDetailsInstructor',instructorLoginDetailsSchema)