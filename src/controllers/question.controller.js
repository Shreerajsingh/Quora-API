const { StatusCodes } = require("http-status-codes");
const { NotImplemented } = require("../Error");
const { QuestionRepository } = require("../repositories");
const { QuestionService } = require("../services");

const questionService = new QuestionService(new QuestionRepository());

async function addQuestion(req, res, next) {
    try {
        const response = await  questionService.addQuestion(req.body);

        return res.status(201).json({
            success: true,
            taks: "Add Question",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

async function getQuestion(req, res, next) {
    try {
        const {text, tags} = req.query;
        
        const response = await questionService.getQuestion(text, tags);
        
        return res.status(200).json({
            success: true,
            taks: "Get Question",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addQuestion,
    getQuestion
}