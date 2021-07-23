const mongoose = require('mongoose');

const connectTeacherInstructor = new mongoose.Schema({
    teachersId: {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsTeacher'},
    instructorsId: {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsInstructor'},
});

module.exports = mongoose.model('Teacher-Instructor',connectTeacherInstructor)
