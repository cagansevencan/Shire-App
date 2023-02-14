const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    type: { type: String, default: "Point" },
    coords: {
        type: [Number],
        index: "2dsphere"
    },
    autopopulate: { maxDepth: 3 }
})

module.exports = mongoose.model('BusinessLocations', locationSchema)

