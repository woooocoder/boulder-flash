// const mongoose = require('mongoose')

// const Climb = new mongoose.Schema({ 
//     id: Number,
//     title: {
//         required: true,
//         type: String
//     },
    
//     gym_rating: {
//         required: true,
//         type: Number
//     },
    
//     style: String,
    
//     completed: {
//         required: true,
//         type: Boolean
//     },
    
//     difficulty: {
//         require: true,
//         type: Number
//     },
    
//     description: String,
    
//     video: String,
// })

// const Session = new mongoose.Schema({
//     id: Number,
//     stats: {
//         session_time: Number, // NUMBER OR DATE ?
//         avg_difficulty: Number, // sum of ratings / n_ratings
//         max_difficulty: Number, // (climbs) => max(climbs.climb.rating)
//         total_climbs: Number, // Length of climbs
//         num_completed: Number, // where completed=true
//         num_failed: Number, // where completed=false
//         completion_rate: Number // num_completed % total_climbs
//     },

//     title: {
//         required: true,
//         type: String
//     },
    
//     climbs: [Climb],
    
//     date: {
//         type: Date,
//         max: Date.now
//     }
// })


// const User = new mongoose.Schema({
//     name: {
//         required: true,
//         type: String
//     },

//     email: {
//         required: true,
//         type: Number
//     },

//     password: {
//         required: true,
//         type: String,
//     },

//     sessions: [Session],
// })

// module.exports = mongoose.model('User', User) 
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ClimbSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },
    gym_rating: {
        type: Number,
        required: true
    },
    style: String,
    completed: {
        type: Boolean,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    description: String,
    video: String
});

const SessionSchema = new mongoose.Schema({
    stats: {
        session_time: Number,
        avg_difficulty: Number,
        max_difficulty: Number,
        total_climbs: Number,
        num_completed: Number,
        num_failed: Number,
        completion_rate: Number
    },
    title: {
        type: String,
        required: true
    },
    climbs: [ClimbSchema],
    date: {
        type: Date,
        default: Date.now,
        max: Date.now
    }
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sessions: [SessionSchema]
});

// https://www.youtube.com/watch?v=mjZIv4ey0ps
// Static signup method
UserSchema.statics.signup = async function(email, name, password) {
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use'); // Make UserAlreadyExistsException
    } 

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, name, password: hash})
    return user
}   

module.exports = mongoose.model('User', UserSchema);
