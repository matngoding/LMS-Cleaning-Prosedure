// sopController.js

const SOPs = []; // This will act as our in-memory database

// Get all SOPs
const getAllSOPs = (req, res) => {
    res.status(200).json(SOPs);
};

// Get single SOP by ID
const getSOPById = (req, res) => {
    const { id } = req.params;
    const sop = SOPs.find(sop => sop.id === id);
    if (!sop) {
        return res.status(404).json({ message: 'SOP not found' });
    }
    res.status(200).json(sop);
};

// Create SOP
const createSOP = (req, res) => {
    const newSOP = { id: Date.now().toString(), ...req.body };
    SOPs.push(newSOP);
    res.status(201).json(newSOP);
};

// Update SOP
const updateSOP = (req, res) => {
    const { id } = req.params;
    const index = SOPs.findIndex(sop => sop.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'SOP not found' });
    }
    SOPs[index] = { ...SOPs[index], ...req.body };
    res.status(200).json(SOPs[index]);
};

// Delete SOP
const deleteSOP = (req, res) => {
    const { id } = req.params;
    const index = SOPs.findIndex(sop => sop.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'SOP not found' });
    }
    SOPs.splice(index, 1);
    res.status(204).send();
};

module.exports = {
    getAllSOPs,
    getSOPById,
    createSOP,
    updateSOP,
    deleteSOP,
};
