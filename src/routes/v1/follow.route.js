const express = require('express');
const { followController } = require('../../controllers');

const followRouter = express.Router({mergeParams: true});

followRouter.post('/:id', followController.follow);

module.exports = followRouter;