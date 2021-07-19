const mongoose = require('mongoose');

const class_student = new mongoose.Schema({
    classId : {type:mongoose.Schema.Types.ObjectId,ref:'Classes'},
    studentId : {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetails'}
});

module.exports = mongoose.model('Class_Student',class_student)
