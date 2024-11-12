// auth.js (route for login)
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const User = require(path.resolve(__dirname, '../model/User'));
 // Assuming you have a User model

const router = express.Router();

// POST /api/v1/auth - Login route
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Create and sign JWT token
        const payload = {
            user: {
                id: user.id
            }
        };

        // Generate JWT token (using your secret key)
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token }); // Send the token as response
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
