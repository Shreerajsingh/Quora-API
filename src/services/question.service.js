const { sanitizeText } = require("../utils");

class QuestionService {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }

    async addQuestion(questionData) {
        // QData contains userId, title, body and topicTags(optional)
        try {
            questionData.body = sanitizeText(questionData.body);

            const response = await this.questionRepository.addQuestion(questionData);

            return response;
        } catch (error) {
            return error;
        }
    }

    async getQuestion(text, tags) {
        try {
            const response = await this.questionRepository.getQuestion(text, tags);

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = QuestionService;