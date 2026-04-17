const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// GET all SOPs
router.get('/', authMiddleware, (req, res) => {
    // Logic to retrieve all SOPs
    res.send('Get all SOPs');
});

// POST a new SOP
router.post('/', authMiddleware, (req, res) => {
    // Logic to create a new SOP
    res.send('Create a new SOP');
});

// PUT to update an existing SOP
router.put('/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    // Logic to update an SOP by id
    res.send(`Update SOP with id: ${id}`);
});

// DELETE an SOP
router.delete('/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    // Logic to delete an SOP by id
    res.send(`Delete SOP with id: ${id}`);
});

module.exports = router;