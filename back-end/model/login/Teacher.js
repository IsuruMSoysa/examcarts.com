const mongoose = require('mongoose');

const teacherLoginDetailsSchema = new mongoose.Schema({
    fullName: String,
    mobile: String,
    email: String,
    username: String,
    password: String
});

module.exports = mongoose.model('LoginDetailsTeacher',teacherLoginDetailsSchema)