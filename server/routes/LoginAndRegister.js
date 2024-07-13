const express = require('express')
const User = require('./../model/model')
const bcrypt = require('bcrypt') 
const router = express.Router()
const { response } = require('express') 
const jwt = require('jsonwebtoken')
// const limiter = reuire rateLimit
// Login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(`login attempt: \n ${email}\n\n`);

    try {
        const user = await User.findOne({ email: email });
        
        if (!user) {
            return res.status(401).json({ err: "The email you entered isn't connected to an account. Please register an account."});
        }

        if (password !== user.password) {
            return res.status(401).json({ err: "Invalid email or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ err: "Invalid email or password."})
        }

        const payload = {
            user: {
                id: user.id,
                sessions: user.sessions,
                name: user.name
            }
        }

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '30 days' },
            (err, token) => {
                if (err) throw err
                res.status(200).json({ message: "Successfully signed in.", token: token })
            }
        )
        

        // res.status(200).json({ message: "Successfully signed in.", token: "" });
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ res: "Server Error. Couldn't sign in.", message: e.message });
    }
    console.log(`${email} signed in`);
});

router.post('/signup', async (req, res) => {
    // email, password and name validation middleware needed
    const { email, password, name } = req.body
    
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(409).json({ message: "This email is already linked to an account."})
        } 

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        user = await User.create({ name: name, email: email, password: hash })
        console.log('id:', this.user._id)

        const payload = {
            user: {
                id: user.id,
                name: user.name
            }
        }

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '7 days' },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ message: "Account created successfully!", token: token });
            }
        )
        // res.status(200).json({ message: "Account created successfully!", id: user._id })
    } catch (e) {
        response.send(500).json({ message: e.message })
    }
})

module.exports = router