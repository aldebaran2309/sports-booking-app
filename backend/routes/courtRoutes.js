const express = require('express');
const router = express.Router();
const Court = require('../models/Court');

// Get all courts for a center and sport
router.get('/', async(req, res) => {
    const { center_id, sport_id } = req.query;
    try {
        const courts = await Court.find({ center_id, sport_id });
        res.json(courts);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving courts' });
    }
});

module.exports = router;