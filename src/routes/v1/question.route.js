const express = require('express');

const { questionController } = require('../../controllers');
const answerRouter = require('./answer.route');
const likeRouter = require('./like.route');

const questionRouter = express.Router({mergeParams: true});

questionRouter.post('/', questionController.addQuestion);

questionRouter.get('/search', questionController.getQuestion);

questionRouter.use('/:id', answerRouter);

questionRouter.use(':id/likes', likeRouter);

module.exports = questionRouter;