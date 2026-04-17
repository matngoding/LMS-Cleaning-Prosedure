const jwt = require('jsonwebtoken');

// Middleware for protecting routes
function verifyToken(req, res, next) {
    // Get token from header
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    
    if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized!' });
        }
        req.userId = decoded.id;
        next();  // Proceed to the next middleware or route handler
    });
}

module.exports = verifyToken;