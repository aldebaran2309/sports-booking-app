const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    center_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Center' },
    sport_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport' },
    court_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Court' },
    start_time: Date,
    end_time: Date
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;