const express = require('express');
const { commentController } = require('../../controllers');

const commentRouter = express.Router({mergeParams: true});

commentRouter.use('/:id/comments', commentController.addComment);

module.exports = commentRouter;