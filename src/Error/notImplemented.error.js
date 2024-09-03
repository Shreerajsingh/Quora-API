const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class NotImplemented extends BaseError {
    constructor(message) {
        super("Not Implemented", StatusCodes.NOT_IMPLEMENTED, {}, message)
    }
}

module.exports = NotImplemented;