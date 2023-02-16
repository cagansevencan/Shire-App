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
        validate: {
            validator: function (v) {
                return v.length === 2 && v[0] >= -180 && v[0] <= 180 && v[1] >= -90 && v[1] <= 90;
            },
            message: props => `${props.value} is not a valid longitude/latitude pair! Coordinates must be between -180 and 180 for longitude, and -90 and 90 for latitude`
        }
    }
}, {
    timestamps: true
})
locationSchema.index({ coordinates: '2dsphere' });


module.exports = mongoose.model('Location', locationSchema)

