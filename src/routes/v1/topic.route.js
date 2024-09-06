const express = require('express');
const { topicController } = require('../../controllers');

const topicRouter = express();

topicRouter.post('/', topicController.createTopic);

topicRouter.get('/', topicController.getTopics);

module.exports = topicRouter;