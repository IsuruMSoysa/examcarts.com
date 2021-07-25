const mongoose = require('mongoose');

const scheduleExam = new mongoose.Schema({
    examName: String,
    classObjId : {type:mongoose.Schema.Types.ObjectId,ref:'Classes'},
    paperObjId : {type:mongoose.Schema.Types.ObjectId,ref:'Papers'},
    instructors : [ {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsInstructor'} ],
    startTime: Date,
    endTime: Date,
    teacherID : {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsTeacher'}
});

module.exports = mongoose.model('Schedule-Exam',scheduleExam)