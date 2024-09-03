const { BadRequest } = require('../Error');
const {sanitizeUserId, sanitizeEmail} = require('../utils/index');

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async addUser(data) {
        try {
            if(!(sanitizeUserId(data.userId) && sanitizeEmail(data.email))) {
                throw new BadRequest("Invalid Credentials Format!");
            }
    
            const response = await this.userRepository.addUser(data);
            
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async getUser(id) {
        try {
            if(!sanitizeUserId(id)) {
                throw new BadRequest("Invalid Username!");
            }

            const response = await this.userRepository.getUser(id);

            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async updateUser(id, data) {
        try {
            if(!sanitizeUserId(id) && (data.email && !sanitizeEmail(data.email))) { 
                throw new BadRequest("Invalid Credentials Format!");
            }

            const response = await this.userRepository.updateUser(id, data);

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserService;