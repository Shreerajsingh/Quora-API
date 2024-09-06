const { StatusCodes } = require("http-status-codes");
const { NotImplemented, NotFound } = require("../Error");
const { AnswerRepository } = require("../repositories");
const { AnswerService } = require("../services");

const answerService = new AnswerService(new AnswerRepository());
async function postAnswer(req, res, next) {
    try {
        const response = await answerService.postAnswer(req.params.id, req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            task: "Post answer",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

async function updatetAnswer(req, res, next) {
    try {
        const response = await answerService.updateAnswer(req.params.id, req.body);

        if(!response) throw NotFound(`Didn't found answer with id: ${id}`);
        
        return res.status(StatusCodes.OK).json({
            success: true,
            task: "Update answer",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postAnswer,
    updatetAnswer
}