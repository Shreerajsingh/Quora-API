class BaseError extends Error {
    constructor(name, statusCode, details, description) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
    }
}

module.exports = BaseError;