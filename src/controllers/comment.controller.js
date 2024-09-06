const { StatusCodes } = require("http-status-codes");
const { CommentRepository } = require("../repositories");
const { CommentService } = require("../services");


const commentService = new CommentService(new CommentRepository());

async function addComment(req, res, next) {
    try {
        console.log(req.params.id, req.body);
        const response = await commentService.addComment(req.params.id, req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            task: "Add Comment",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {addComment};