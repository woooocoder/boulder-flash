const express = require('express')
const User = require('../model/model') 
const router = express.Router() 
const jwt = require('jsonwebtoken')

router.get('/user', authenticateToken, async (req, res) => {
    try { 
        const user = await User.findById(req.user.id).select('-password') // exclude password
        if (!user) {
            return res.status(404).json({ err: "User not found"})
        }

        res.status(200).json(user)
    } catch (e) {
        console.error(e.message)
        res.status(500).json({ err: "Server Error"})
    }
})

function authenticateToken(req, res, next) { 
    const authHeader = req.headers['authorization']
    // authorization: Bearer <TOKEN>
    const token = authHeader && authHeader.split(' ')[1] 
    if (token == null) {
        return res.sendStatus(401)
    } 

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error(err)
            return res.sendStatus(403) // invalid token
        } 
        req.user = user 
        next()
    })
}

module.exports = router