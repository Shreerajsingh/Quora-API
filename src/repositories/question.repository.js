const { Questions } = require('../models');

class QuestionRepository {
    async addQuestion(questionData) {
        try {
            const response = await Questions.create({
                userId: questionData.userId,
                title: questionData.title,
                body: questionData.body,
                topicTags: questionData.topicTags
            })
    
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getQuestion(text, tags) {
        try {
            const response = await Questions.find({
                $or: [{$or: [
                    {title: {$regex: text, $options: 'i'}},
                    {body: {$regex: text, $options: 'i'}}
                ]},
                {topicTags: {$in: tags}}]
            });
    
            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = QuestionRepository;