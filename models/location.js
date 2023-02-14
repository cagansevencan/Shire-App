const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: String,
    type: {
        type: String,
        default: 'Point',
        required: true
    },
    coordinates: {
        type: [Number],
        index: '2dsphere',
        required: true
    }
}, {
    timestamps: true
})
//locationSchema.index({ coords: '2dsphere' })

module.exports = mongoose.model('Location', locationSchema)

