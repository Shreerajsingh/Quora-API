const express = require('express');
const { answerController, commentController } = require('../../controllers');

const answerRouter = express.Router({mergeParams: true});

answerRouter.post('/answers', answerController.postAnswer);

answerRouter.put('/:id', answerController.updatetAnswer);

answerRouter.post('/:id/comments', commentController.addComment);

module.exports =  answerRouter;