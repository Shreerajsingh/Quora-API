class TopicService {
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }

    async createTopic(data) {
        try {
            const response = await this.topicRepository.createTopic(data);

            return response;
        } catch (error) {
            return error;
        }
    }

    async getTopics() {
        try {
            const response = await this.topicRepository.getTopics();

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = TopicService;