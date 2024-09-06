const { InternalServer } = require("../Error");
const { Answer } = require("../models");

class AnswerRepository {
    async postAnswer(id, data) {
        try {
            const response = await Answer.create({
                questionId: id,
                userId: data.userId,
                text: data.text
            })
    
            return response;
        } catch (error) {
            return error;
        }
    }

    async updateAnswer(id, data) {
        try {
            const response = await Answer.updateOne(
                {_id: id},
                {$set: data}
            )

            return Answer.findOne({_id: id});
        } catch (error) {
            return error;
        }
    }
}

module.exports = AnswerRepository;