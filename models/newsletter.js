const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    subscribed: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Newsletter', newsletterSchema);