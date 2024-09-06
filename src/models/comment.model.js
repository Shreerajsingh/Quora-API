const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    parentId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;