const { Follow } = require("../models");

class FollowRepository {
    async follow(followId, id) {
        try {
            const response = await Follow.create({
                userId: id,
                targetUserId: followId
            })

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = FollowRepository;