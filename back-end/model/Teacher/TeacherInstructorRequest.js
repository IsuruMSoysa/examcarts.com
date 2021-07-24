const mongoose = require('mongoose');

const requestToInstructor = new mongoose.Schema({
    teacherId: {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsTeacher'},
    instructorId: {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsInstructor'},
});

module.exports = mongoose.model('Teacher-InstructorRequest',requestToInstructor)
