const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class InternalServer extends BaseError {
    constructor(message) {
        super("Internal Server Error", StatusCodes.INTERNAL_SERVER_ERROR, {}, message)
    }
}

module.exports = InternalServer;