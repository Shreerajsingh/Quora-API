const express = require('express');
const { likeController } = require('../../controllers');

const likeRouter = express.Router();

likeRouter.post('/', likeController.likeIt);

module.exports = likeRouter;