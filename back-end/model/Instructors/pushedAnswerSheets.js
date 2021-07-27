const mongoose = require('mongoose');

const evaluatedPapers = new mongoose.Schema({
    examObjId: {type:mongoose.Schema.Types.ObjectId,ref:'Schedule-Exam'},
    studentObjId: {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetails'},
    instructorId: {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsInstructor'},
    answerSheetId: String,
    answersheetUrl: String,
    finalMarks: String
});

module.exports = mongoose.model('Evaluated-Papers',evaluatedPapers)
