class FollowService {
    constructor(followRepository) {
        this.followRepository = followRepository;
    }

    async follow(followId, id) {
        try {
            const response = await this.followRepository.follow(followId, id);

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = FollowService;