const express = require('express');
const router = express.Router();
const Center = require('../models/Center');

// Get all centers
router.get('/', async(req, res) => {
    try {
        const centers = await Center.find();
        res.json(centers);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving centers' });
    }
});

module.exports = router;