const { UserService } = require('../services');
const { UserRepository } = require('../repositories');
const { NotImplemented, NotFound } = require('../Error');

const userService = new UserService(new UserRepository);

async function addUser(req, res, next) {
    try {
        const response = await userService.addUser(req.body);
        return res.status(201).json({
            success: true,
            task: "Add User",
            username: response.username,
            data: response
        })
    } catch (error) {
        // console.log(error);
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const response = await userService.getUser(req.params.id);
        
        if(!response) {
            throw new NotFound("User not found");
        }

        return res.status(200).json({
            success: true,
            task: "Get User",
            userId: req.params.id,
            data: response
        });
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const response = await userService.updateUser(req.params.id, req.body);

        if(!response) throw new NotFound("User not found");

        return res.status(200).json({
            success: true,
            task: "Update User",
            userId: req.params.id,
            newData: response
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addUser,
    getUser,
    updateUser
}