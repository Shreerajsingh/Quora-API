const express = require('express');

const userRouter = require('./user.route');
const questionRouter = require('./question.route');
const answerRouter = require('./answer.route');
const commentRouter = require('./comment.route');
const topicRouter = require('./topic.route');

const v1Router = express();

v1Router.use('/users', userRouter);
v1Router.use('/questions', questionRouter);
v1Router.use('/answers', answerRouter);
v1Router.use('/comments', commentRouter);
v1Router.use('/topics', topicRouter);

module.exports = v1Router;