const express = require('express');
const { answerController, commentController } = require('../../controllers');
const likeRouter = require('./like.route');

const answerRouter = express.Router({mergeParams: true});

answerRouter.post('/answers', answerController.postAnswer);

answerRouter.put('/:id', answerController.updatetAnswer);

answerRouter.post('/:id/comments', commentController.addComment);

answerRouter.use(':id/likes', likeRouter);

module.exports =  answerRouter;