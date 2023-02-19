import type { NextFunction, Request, Response } from 'express';
import type AppError from '../helper/AppError';

const errorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return res.status(err.statusCode).json({
        message: err.message,
    });
};

export default errorHandler;
