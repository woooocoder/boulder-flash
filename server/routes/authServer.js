const express = require('express')
const User = require('../model/model')
const bcrypt = require('bcrypt') 
const router = express.Router()
const jwt = require('jsonwebtoken')

// hash and add tokens to db!!
let refreshTokens = []
router.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name, id: user.id })
        res.json({ accessToken: accessToken })    
    })
}) // pass a { token:<REFRESH_TOKEN> } and get a new <ACCESS_TOKEN>


// delete token from db
router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204) // successful deletion 
})

// Login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body; 

    try {
        const user = await User.findOne({ email: email });
        
        if (!user) {
            return res.status(401).json({ err: "The email you entered isn't connected to an account. Please register an account."});
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ err: "Invalid email or password."})
        } 

        const accessToken = generateAccessToken(user)
        const payload = {
            id: user.id,
            email: user.email
        }
        const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET
        )
        refreshTokens.push(refreshToken)
        res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken})
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ res: "Server Error. Couldn't sign in.", message: e.message });
    } 
});

function generateAccessToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        sessions: user.sessions
    }
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '10m'} // 10m
    )
}

module.exports = router