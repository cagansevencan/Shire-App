const mongoose = require('mongoose');

const businessDetailsSchema = new mongoose.Schema({
    category: [String],
    practice: [String],
    foodType: [String]
});

module.exports = mongoose.model('BusinessDetails', businessDetailsSchema)