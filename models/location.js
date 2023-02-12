const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    address: String,
    coords: {
        type: "Point",
        coordinates: [Number]
    }
})

module.exports = mongoose.model('Location', locationSchema)

