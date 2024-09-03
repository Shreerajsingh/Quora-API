const {User} = require('../models');

class UserRepository {
    async addUser(userData) {
        try {
            const user = await User.create({
                username: userData.username,
                userId: userData.userId,
                email: userData.email,
                bio: userData.bio
            });

            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserRepository;