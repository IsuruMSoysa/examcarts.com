const mongoose = require('mongoose');

const enrollment = new mongoose.Schema({
    // studentUsername : {type:mongoose.Schema.Types.ObjectId,ref:'LoginDetails'},
    // classTitle : {type:mongoose.Schema.Types.className,ref:'Classes'}
    studentUsername : String,
    classTitle : String
});

module.exports = mongoose.model('Enrollment',enrollment)
