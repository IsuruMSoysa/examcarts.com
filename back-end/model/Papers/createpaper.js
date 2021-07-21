const mongoose = require('mongoose');

const createpaper = new mongoose.Schema({

   paperUrl: String,
   paperId: String,
   teacherId: {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsTeacher'},
   paperName: String ,
   duration: String ,
   finalMarks: String

});

module.exports = mongoose.model('Papers',createpaper)
