const Like = require("../models");

class LikeRepository {
    async likeIt(id, data) {
        try {
            const response = await Like.create({
                userId: data.userId,
                typeId: id
            })

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = LikeRepository;