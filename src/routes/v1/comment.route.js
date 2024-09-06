const express = require('express');
const { commentController } = require('../../controllers');
const likeRouter = require('./like.route');

const commentRouter = express.Router({mergeParams: true});

commentRouter.use('/:id/comments', commentController.addComment);

commentRouter.use(':id/likes', likeRouter);

module.exports = commentRouter;