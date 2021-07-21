const mongoose = require('mongoose');

const createpaper = new mongoose.Schema({
   paperUrl: String
});

module.exports = mongoose.model('Papers',createpaper)
