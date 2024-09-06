const { StatusCodes } = require("http-status-codes");
const { FollowRepository } = require("../repositories");
const { FollowService } = require("../services");


const followService = new FollowService(new FollowRepository());

async function follow(req, res, next) {
    try {
        const response = await followService.follow(req.params.followId, req.params.id);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            task: "Add follow",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {follow};