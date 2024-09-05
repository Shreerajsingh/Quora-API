const express = require('express');

const questionController = require('../../controllers/question.controller');

const questionRouter = express();

questionRouter.post('/', questionController.addQuestion);

questionRouter.get('/search', questionController.getQuestion);

module.exports = questionRouter;