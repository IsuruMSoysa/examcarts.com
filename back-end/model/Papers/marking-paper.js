const mongoose = require('mongoose');

const createmarking = new mongoose.Schema({
    markingUrl: String,
    markingId: String,
    paperId: {type:mongoose.Schema.Types.ObjectId,ref:'Papers'}
});

module.exports = mongoose.model('Marking-Paper',createmarking)
