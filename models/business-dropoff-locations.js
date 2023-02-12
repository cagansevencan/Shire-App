const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    address: { type: String, required: true },
    zipCode: { type: String, required: true },
    coords: {
        type: "Point",
        coordinates: [Number]
    }
}, { timestamps: true })

module.exports = mongoose.model('BusinessDropoffLocations', locationSchema)

