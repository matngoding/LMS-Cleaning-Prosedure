const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Imports
const authRoutes = require('./routes/auth');
const sopRoutes = require('./routes/sop');
const progressRoutes = require('./routes/progress');

app.use('/api/auth', authRoutes);
app.use('/api/sop', sopRoutes);
app.use('/api/progress', progressRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});