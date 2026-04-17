'use strict';

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Mock database for user progress
let userProgress = {};

// Track user progress
router.post('/track', authMiddleware, (req, res) => {
    const { userId, progress } = req.body;
    if (!userId || !progress) {
        return res.status(400).send('User ID and progress are required.');
    }
    userProgress[userId] = userProgress[userId] || {};
    userProgress[userId].progress = progress;
    return res.status(200).send(`Progress updated for user ${userId}.`);
});

// Update user progress
router.put('/update', authMiddleware, (req, res) => {
    const { userId, progress } = req.body;
    if (!userId || !progress) {
        return res.status(400).send('User ID and progress are required.');
    }
    if (userProgress[userId]) {
        userProgress[userId].progress = progress;
        return res.status(200).send(`Progress updated for user ${userId}.`);
    } else {
        return res.status(404).send('User not found.');
    }
});

// Get user statistics
router.get('/statistics/:userId', authMiddleware, (req, res) => {
    const userId = req.params.userId;
    if (userProgress[userId]) {
        return res.status(200).json(userProgress[userId]);
    } else {
        return res.status(404).send('User not found.');
    }
});

module.exports = router;
