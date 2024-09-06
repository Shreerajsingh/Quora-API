const { StatusCodes } = require("http-status-codes");
const { TopicService } = require("../services");
const { TopicRepository } = require("../repositories");

const topicService = new TopicService(new TopicRepository());

async function createTopic(req, res, next) {
    try {
        const response = await topicService.createTopic(req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            task: "Create topic",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

async function getTopics(req, res, next) {
    try {
        const response = await topicService.getTopics();

        return res.status(StatusCodes.CREATED).json({
            success: true,
            task: "Get all the topics",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createTopic,
    getTopics
}