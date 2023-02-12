const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true },
    phone: String,
    location: String,
    businessesCreated: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    }],
    favBusinesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    }]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)