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

    async getUser(uid) {
        try {
            const user = await User.findOne({userId: uid});
            
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async updateUser(uid, data) {
        try {
            const response = await User.updateOne(
                {userId: uid}, 
                {$set: data}
            );

            const res = await User.findOne({userId: uid});

            return res;
        }
        catch(error) {
            console.log(error);
        }
    }
}

module.exports = UserRepository;