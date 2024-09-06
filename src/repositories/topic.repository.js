const { Topic } = require("../models");

class TopicRepository {
    async createTopic(data) {
        try {
            const response = await Topic.create({
                name: data.name
            })

            return response;
        } catch (error) {
            return error;
        }
    }

    async getTopics() {
        try {
            const response = await Topic.find();

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = TopicRepository;