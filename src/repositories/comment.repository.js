const { Comment } = require("../models");

class CommentRepository {
    async addComment(id, data) {
        try {
            const response = await Comment.create({
                userId: data.userId,
                parentId: id,
                text: data.text
            })

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = CommentRepository;