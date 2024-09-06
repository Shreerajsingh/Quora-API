
class LikeService {
    constructor(likeRepository) {
        this.likeRepository = likeRepository;
    }

    async likeIt(id, data) {
        try {
            const response = await this.likeRepository.likeIt(id, data);

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = LikeService;