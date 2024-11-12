const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    // Get the token from the 'Authorization' header
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    // If no token is found, return an error
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Decode the token using the secret key and extract user information
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user to the 'req' object
        req.user = decoded.user;

        // Call the next middleware or route handler
        next();
    } catch (err) {
        // If the token is invalid, return an error
        console.error(err.message);
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = auth;
