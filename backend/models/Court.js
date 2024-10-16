const mongoose = require('mongoose');

const courtSchema = new mongoose.Schema({
    center_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Center' },
    sport_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport' },
    name: String
});

const Court = mongoose.model('Court', courtSchema);

module.exports = Court;