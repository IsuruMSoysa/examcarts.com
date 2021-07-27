const mongoose = require('mongoose');

const uploadanswers = new mongoose.Schema({
    examObjId : {type:mongoose.Schema.Types.ObjectId,ref:'Schedule-Exam'},
    studentObjId : {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetails'},
    answerSheetId : String,
    answersheetUrl: String,
});

module.exports = mongoose.model('Student-ExamAnswers',uploadanswers)