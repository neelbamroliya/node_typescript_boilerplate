import { StatusCodes } from 'http-status-codes';

export class ApiError extends Error {
    statusCode: StatusCodes;

    constructor(statusCode = 500, message: string, stack = '') {
        super(message);
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
