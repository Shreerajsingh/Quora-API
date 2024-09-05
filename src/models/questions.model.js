const mongoose = require('mongoose');

const questionsSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    topicTags: {
        type: [String]
    }
})

const Questions = mongoose.model('Questions', questionsSchema);

module.exports = Questions;