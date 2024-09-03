const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class BadRequest extends BaseError {
    constructor(message) {
        super("Bad Request", StatusCodes.BAD_REQUEST, {}, message)
    }
}

module.exports = BadRequest;