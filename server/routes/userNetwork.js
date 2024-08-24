const express = require('express') 
const router = express.Router()
const UserNetwork = require('./../model/userNetwork')

// Return list of followers
router.get('/network/getFollowers', async (req, res) => {
    try {
        const id = await req.body.id
        const network = await UserNetwork.findOne({userId: id})
        res.status(201).json({message: 'Followers:', network})
    } catch (e) {
        console.error('Error getting followers: ', e)
    }
})

// Return list of follwing
router.get('/network/getFollowing', async (req, res) => {
    try {
        const id = await req.body.id
        const network = await UserNetwork.findOne({userId: id})
        res.status(201).json({message: 'Following:', network})
    } catch (e) {
        console.error('Error getting followers: ', e)
    }
})

router.put('/network/addFollower/', async (req, res) => {
    try {
        const userId = req.body.userId;
        const followerId = req.body.followerId;
        
        // Validate input
        if (!userId || !followerId) {
            return res.status(400).json({ message: 'User ID and Follower ID are required' });
        }

        if (userId === followerId) {
            return res.status(400).json({ message: 'A user cannot follow themselves' });
        }

        // Update the userId's followers list
        const userUpdate = UserNetwork.findOneAndUpdate(
            { userId: userId },
            { $addToSet: { followers: followerId } },
            { new: true, upsert: true } // Update doc if it doesn't exist
        );

        // Update the followerId's following list
        const followerUpdate = UserNetwork.findOneAndUpdate(
            { userId: followerId },
            { $addToSet: { following: userId } },
            { new: true, upsert: true } // Update doc if it doesn't exist
        );

        // Perform both updates
        const [userNetwork, followerNetwork] = await Promise.all([userUpdate, followerUpdate]);

        res.status(200).json({ message: 'Follower and following lists updated', userNetwork, followerNetwork });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// unfollow
router.delete('/network/deleteFollowing', async (req, res) => {
    try {
        const userId = req.body.userId
        const followerId = req.body.followerId

        if (!userId || !followerId) {
            return res.status(400).json({ message: 'User ID and Follower ID are requirements'})
        }

        const userUpdate = UserNetwork.findOneAndDelete(
            { userId: userId},
            { $pull: { followers: followerId } },
        )

        const followerUpdate = UserNetwork.findOneAndDelete(
            { userId: followerId },
            { $pull: { following: userId } },
        )

        const [userNetwork, followerNetwork] = await Promise.all([userUpdate, followerUpdate])
        if (!userNetwork || !followerNetwork) {
            return res.status(404).json({ message: 'userNetwork not found' })
        }

        res.status(200).json({ message: 'Follower and following updated' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router