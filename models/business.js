const mongoose = require('mongoose');


const businessSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    description: String,
    email: { type: String, required: true },
    phone: String,
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        autopopulate: { maxDepth: 2 }
    },
    createdAt: Date,
    hours: String,
    socialMedia: String,
    photos: [String],
    businessDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessDetails',
        autopopulate: { maxDepth: 2 }
    },
    dropOffLocations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    }],
    deliveryTypes: [String],
    // favs: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }]
}, { timestamps: true })

module.exports = mongoose.model('Business', businessSchema)