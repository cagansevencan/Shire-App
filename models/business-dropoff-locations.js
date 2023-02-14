const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    type: { type: String, default: "Point" },
    coords: {
        type: [Number],
        index: "2dsphere"
    }
})

module.exports = mongoose.model('BusinessDropoffLocations', locationSchema)

