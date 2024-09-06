const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    typeId: {
        type: String,
        required: true
    }
})

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;