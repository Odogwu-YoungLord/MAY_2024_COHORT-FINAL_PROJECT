const express = require('express');
const router = express.Router()
const User = require('../model/User')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @route       GET api/v1/auth
// @desc        Get logged in user (without authentication)
// @access      Public

router.get('/', async (req, res) => {
    try {
        const user = await User.findOne().select('-password')
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'server error' })
    }
})

// @route       POST api/v1/auth
// @desc        Auth user & get token (this will be unused in this case)
// @access      Public

router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        // JWT generation (won't be used, since we disabled authentication)
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.jwt_secret, { expiresIn: 360000 }, (error, token) => {
            if (error) throw error
            res.json({ token })
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'server error' })
    }
})

module.exports = router
