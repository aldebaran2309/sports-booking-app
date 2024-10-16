const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
    name: String,
    address: String
});

const Center = mongoose.model('Center', centerSchema);

module.exports = Center;