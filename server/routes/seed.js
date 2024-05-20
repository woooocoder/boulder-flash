const express = require('express')
const router = express.Router()

const User  = require('./../model/model')
const { response } = require('express')


// seed db with users who have sessions and climbs  
router.put('/seed/users', async (req, res) => {
    try {
        const data = {};
        const seed = await User.insertMany(data)
        res.json(seed)
        response.status(201).json({message: 'Seeded db with users'})
    } catch (error) {
        response.status(500).json({ message: error.message })
    }

})

// seed db with users who have no sessions
router.put('/seed/users/empty', async (req, res) => {
    try{
        const data = {};
        const seed = await User.insertMany(data)
        res.json(seed)
        response.status(201).json({message: 'Seeded db with empty users'})

    } catch (error) {
        response.status(500).json({mesage: error.message})
    }
}) 




module.exports = router