const mongoose = require('mongoose');

const classDetails = new mongoose.Schema({
    className: String,
    teacherId : String,
    educationInstitute : String,
    description : String,
    admissionFee: String,
    monthlyFee: String
});

module.exports = mongoose.model('Classes',classDetails)
