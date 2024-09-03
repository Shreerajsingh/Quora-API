const { UserService } = require('../services');
const { UserRepository } = require('../repositories');

const userService = new UserService(new UserRepository);

async function addUser(req, res, next) {
    try {
        const response = await userService.addUser(req.body);
        return res.json({
            success: true,
            task: "Add User",
            username: response.username
        })
    } catch (error) {
        // console.log(error);
        next(error);
    }
}

module.exports = {
    addUser
}