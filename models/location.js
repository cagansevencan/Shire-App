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
        required: true,
        //unique: true
    }
}, {
    timestamps: true
})
locationSchema.index({ coordinates: '2dsphere' });


module.exports = mongoose.model('Location', locationSchema)

