const express = require('express');

const { userController } = require('../../controllers');
const followRouter = require('./follow.route');

const userRouter = express.Router();

userRouter.post('/', userController.addUser);

userRouter.get('/:id', userController.getUser);

userRouter.put('/:id', userController.updateUser);

userRouter.use('/:followId/follow', followRouter);

module.exports = userRouter;