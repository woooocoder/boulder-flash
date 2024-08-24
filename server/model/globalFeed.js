const { Schema } = require('@mui/icons-material')
const mongoose = require('mongoose')
const GlobalFeedSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    climbIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Climb'
    }],
    timeStamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('GlobalFeed', GlobalFeedSchema)