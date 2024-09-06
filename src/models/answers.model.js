const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    questionId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;