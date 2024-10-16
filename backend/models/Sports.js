const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    name: String
});

const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;