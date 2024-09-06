const { LikeRepository } = require("../repositories");
const { LikeService } = require("../services");

const likeService = new LikeService(new LikeRepository);

async function likeIt(req, res, next) {
    try {
        console.log(req.params.id, req.body);
        const response = await likeService.likeIt(req.params.id, req.body);

        return res.status(201).json({
            success: true,
            task: "add like",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    likeIt
}