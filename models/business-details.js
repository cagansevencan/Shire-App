const mongoose = require('mongoose');

const businessDetailsSchema = new mongoose.Schema({
    category: [String],
    practice: [String],
    products: [String],
});

module.exports = mongoose.model('BusinessDetails', businessDetailsSchema)