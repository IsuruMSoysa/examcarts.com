const mongoose = require('mongoose');

const classDetails = new mongoose.Schema({
    className: String,
    teacherId : {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetailsTeacher'},
    educationInstitute : String,
    description : String,
    admissionFee: String,
    monthlyFee: String,
    enrollments: Number
});

module.exports = mongoose.model('Classes',classDetails)
