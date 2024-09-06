const express = require('express');
const { answerController } = require('../../controllers');

const answerRouter = express.Router({mergeParams: true});

answerRouter.post('/answers', answerController.postAnswer);

answerRouter.put('/:id', answerController.updatetAnswer);

module.exports =  answerRouter;