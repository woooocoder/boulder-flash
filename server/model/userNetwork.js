const mongoose = require('mongoose')
const UserNetworkSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followers: [mongoose.Schema.Types.ObjectId],
    following: [mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model('Network', UserNetworkSchema);
