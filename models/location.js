const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    type: {
        type: String,
        default: 'Point',
        required: true
    },
    coordinates: {
        type: [Number],
        index: '2dsphere',
        required: true,
        unique: true
    }
}, {
    timestamps: true
})



module.exports = mongoose.model('Location', locationSchema)

