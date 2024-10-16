const express = require('express');
const router = express.Router();
const Sport = require('../models/Sport');

// Get all sports for a center
router.get('/', async(req, res) => {
    const { center_id } = req.query;
    try {
        const sports = await Sport.find({ center_id });
        res.json(sports);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving sports' });
    }
});

module.exports = router;