const express = require('express')
const router = express.Router()

const User  = require('./../model/model')
const { response } = require('express')
const userNetwork = require('../model/userNetwork')


// seed db with users who have sessions and climbs  
router.put('/users', async (req, res) => {
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
router.put('users/empty', async (req, res) => {
    try{
        const data = {};
        const seed = await User.insertMany(data)
        res.json(seed)
        response.status(201).json({message: 'Seeded db with empty users'})

    } catch (error) {
        response.status(500).json({mesage: error.message})
    }
}) 

router.put('/network/empty', async (req, res) => {
    try {
        const users = await User.find({});
        for (let user of users) {
            const network = await userNetwork.insertMany({
                    userId: user._id, 
                    followers: [], 
                    folowwing: []
                })
            console.log(network)
        } 

        res.status(201).json({ message: 'Seeded db with empty network' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 



module.exports = router