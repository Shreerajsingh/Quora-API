const BaseError = require('../Error/base.error');
const { StatusCodes } = require('http-status-codes');

function errorHandler(error, req, res, next) {
    if(error instanceof BaseError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            error: error.details,
            data: []
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Somthing went wrong!",
        error: error,
        data: ["Womp wOmp"]
    });
}

module.exports = errorHandler;