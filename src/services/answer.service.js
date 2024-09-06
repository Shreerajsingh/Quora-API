const { BadRequest } = require("../Error");
const { sanitizeText, sanitizeUserId } = require("../utils");

class AnswerService {
    constructor(answerRepository) {
        this.answerRepository = answerRepository;
    }

    async postAnswer(id, data) {
        try {
            data.text = sanitizeText(data.text);
            if(!sanitizeUserId(data.userId)) {
                throw new BadRequest("Invalid Username");
            }
            const response = await this.answerRepository.postAnswer(id, data);

            return response;
        } catch (error) {
            // code
        }
    }

    async updateAnswer(id, data) {
        try {
            data.text = sanitizeText(data.text);

            const response = await this.answerRepository.updateAnswer(id, data);

            return response;
        } catch(error) {
            return error;
        }
    }
}

module.exports = AnswerService;