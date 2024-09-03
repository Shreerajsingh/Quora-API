const express = require('express');

const { userController } = require('../../controllers');

const userRouter = express();

console.log("Routing for /api/v1/users post");
userRouter.post('/users', userController.addUser);

// userRouter.get('/users/:id', userController.getUser);

// userRouter.put('/users/:id', userController.updateUser);

module.exports = userRouter;