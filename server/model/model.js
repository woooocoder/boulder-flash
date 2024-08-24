const mongoose = require('mongoose');
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
