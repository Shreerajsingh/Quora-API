const sanitizeText = require("../utils");

class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }

    async addComment(id, data) {
        try {
            const response = await this.commentRepository.addComment(id, data);

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = CommentService;