const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    bio: {
        type: String
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;