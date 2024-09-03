const {sanitizeUserId, sanitizeEmail} = require('../utils/index');

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async addUser(data) {
        try {
            if((sanitizeUserId(data.userId) && sanitizeEmail(data.email))) {
                // throw new invalidCredentials("Invalid Username or Email");
            }
    
            const response = await this.userRepository.addUser(data);
            
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserService;