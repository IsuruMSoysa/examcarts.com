const mongoose = require('mongoose');

const pendingEnrollmentsRequest = new mongoose.Schema({
    studentId : {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetails'} ,
    classId : {type:mongoose.Schema.Types.ObjectId,ref:'Classes'},
    teacherId : {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsTeacher'},
    receiptNo : String,
    bankName : String ,
    branchName : String,
    firstName : String,
    lastName : String,
    email : String,
    mobile: String,
    address : String,
    imageId : String,
    ImgUrl : String,
    UploadedTime : String
});

module.exports = mongoose.model('Pending Enrollments',pendingEnrollmentsRequest)
