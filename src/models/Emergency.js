const mongoose = require('mongoose');

const EmergencySchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    imagePath: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Emergency', EmergencySchema);