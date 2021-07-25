const mongoose = require('mongoose');

const uploadanswers = new mongoose.Schema({
    examObjId : {type:mongoose.Schema.Types.ObjectId,ref:'Classes'},
    studentObjId : {type:mongoose.Schema.Types.ObjectId,ref:'Papers'},
    answerSheetId : String,
    answersheetUrl: String,
});

module.exports = mongoose.model('Student-ExamAnswers',uploadanswers)