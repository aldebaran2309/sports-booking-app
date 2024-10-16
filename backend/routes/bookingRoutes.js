const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// View Bookings API
router.get('/', async(req, res) => {
    const { center_id, sport_id, date } = req.query;

    // Define the start and end of the day
    const startDate = new Date(`${date}T00:00:00.000Z`);
    const endDate = new Date(`${date}T23:59:59.999Z`);

    try {
        const bookings = await Booking.find({
            center_id,
            sport_id,
            start_time: { $gte: startDate, $lte: endDate }
        });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving bookings' });
    }
});

// Create Booking API
router.post('/', async(req, res) => {
    try {
        const { center_id, sport_id, court_id, start_time, end_time } = req.body;
        const booking = new Booking({
            center_id,
            sport_id,
            court_id,
            start_time,
            end_time
        });
        await booking.save();
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Error creating booking' });
    }
});

module.exports = router;