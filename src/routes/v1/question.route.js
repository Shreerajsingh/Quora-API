const express = require('express');

const { questionController } = require('../../controllers');
const answerRouter = require('./answer.route');

const questionRouter = express();

questionRouter.post('/', questionController.addQuestion);

questionRouter.get('/search', questionController.getQuestion);

questionRouter.use('/:id', answerRouter);

module.exports = questionRouter;