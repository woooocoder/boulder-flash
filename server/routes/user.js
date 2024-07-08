const express = require('express')
const User = require('./../model/model')
const bcrypt = require('bcrypt')
const router = express.Router()
const { response } = require('express') 

// Sign up
router.post('/signup', async (req, res) => {
    // email, password and name validation middleware needed
    const { email, password, name } = req.body
    
    try {
        let user = await User.findOne({ email })
        
        if (user) {
            return res.status(409).json({ message: "This email is already linked to an account"})
        } 

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        user = await User.create({ name: name, email: email, password: hash })
        console.log('id:', this.user._id)
        res.status(200).json({ message: "Account created successfully!", id: user._id })
    } catch (e) {
        response.send(500).json({ message: e.message })
    }
})

// Login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne(
            {
                email: email,
                password: password
            }
        )
        if (user === null) {
            return res.status(400).json({ err: "The email you entered isn't connected to an account. Please register an account."})
        }
    } catch (e) {
        response.send(500).json({ res: "couldn't sign in", message: e.message })
    }
    console.log('signed in', password)
    // generate a cookie
})

router.get('/home', async (req, res) => {
    try {
        const id = req.body.id
        const user = await User.findById(id).populate('sessions')
        
        res.json(user.sessions)

    } catch (e) {
        response.send(400).json({message: e.message}) 
    }
})
// Get user by id
router.get('/getUser/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.json(user)
    } catch (e) {
        response.send(500).json({message: e.message})
    }
})

// Get all users
router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.find();
        console.log(users)
        // Iterate through each user and set static IDs for sessions and climbs
        users.forEach(user => {
            user.sessions.forEach((session, sessionIndex) => {
                session.id = sessionIndex; // Set session ID based on index
                
                session.climbs.forEach((climb, climbIndex) => {
                    climb.id = climbIndex; // Set climb ID based on index
                });
            });
        });

        res.json(users);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
});

// router.delete('/deleteUser/:id', async (req, res) => {
//     try {
//         const id = req.body.id
//         const user = await User.findByIdAndDelete(id)
//         res.send(`${user.name} has been deleted`)
//     } catch (e) {
//         response.send(400).json({ message: e.message })
//     }
// })


// Reset db
// router.delete('/XdeleteAllUsers', async (req, res) => {
//     try {
//         const data = await User.find()
//         User.deleteMany(data)
//         res.send('All users have been deleted')
//     } catch (e) {
//         response.send(400).json({ message: e.message })
//     }
// })

// Get session by id 
router.get('/user/:id/getSessions', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id).populate('sessions')
        
        res.json(user.sessions)

    } catch (e) {
        response.send(400).json({message: e.message})
    }
})

// Get climbs given a session 
router.get('user/:userId/session/:sessionDate/climbs', async (req, res) => {
    try {
        const userId = req.params.userId
        const sessionDate = new Date(req.params.sessionDate)

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({message: 'user not found'})
        }

        const session = user.sessions.find(sessionDate)
        if (!session) {
            return res.status(404).json({message: 'session not found'})
        }

        res.json(session.climbs)
        
    } catch (e) {
        response.send(400).json({message: e.message})
    }
})

// Route to add a session to a user
router.post('/user/:userId/newSession', async (req, res) => {
    const userId = req.params.userId
    const sessionData = req.body
    
    console.log(req.body)

    try {
        console.log('in try block --- to add session')
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        console.log('user found')

        user.sessions.push(sessionData)
        await user.save()
        
        console.log('session added')
        res.status(201).json({ message: 'Session added successfully', user })
    } catch (error) {
        res.status(400).json({ message: 'Failed to add session', error: error.message })
    }
})

// Delete a session from a user
router.delete('/user/:userId/session/:sessionId', async (req, res) => {
    const userId = req.params.userId;
    const sessionId = req.params.sessionId;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the index of the session to delete
        const sessionIndex = user.sessions.findIndex(session => session.id === sessionId);
        if (sessionIndex === -1) {
            return res.status(404).json({ message: 'Session not found' });
        }

        // Remove the session from the user's sessions array
        user.sessions.splice(sessionIndex, 1);
        await user.save();

        res.status(200).json({ message: 'Session deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete session', error: error.message });
    }
});


// Add new climb to session 
router.post('/users/:userId/sessions/:sessionId/climbs', async (req, res) => {
    try {
        const userId = req.params.userId
        const sessionId = req.params.sessionId

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const session = user.sessions.find(session => session._id === sessionId)
        if (!session) {
            return res.status(404).json({ message: 'Session not found' })
        }

        session.climbs.push(climbData)
        await user.save()
        res.status(201).json({ message: 'Climb added successfully', user })
    } catch (error) {
        res.status(400).json({ message: 'Failed to add climb' })
    }
})
// router.post('/users/:userId/:sessionId/climbs', async (req, res) => {
//     const userId = req.params.userId
//     const sessionData = req.body

//     console.log(req.body)

//     try {

//         console.log('in try block --- to add session')
//         const user = await User.findById(userId)
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' })
//         }
//         console.log('user found')

//         user.sessions.push(sessionData)
//         await user.save()
//         console.log('session added')
//         res.status(201).json({ message: 'Session added successfully', user })
//     } catch (error) {
//         res.status(400).json({ message: 'Failed to add session', error: error.message })
//     }
// })

module.exports = router