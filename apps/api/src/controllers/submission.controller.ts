import { NextFunction, Request, Response } from 'express';
import AppError from '../helper/AppError';
import { QuizSubmission } from '../models';

export const getSubmissions = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const subs = await QuizSubmission.find();
        const jsonSubs = subs.map((sub) => sub.toJSON());

        res.status(201).json({
            message: 'Fetched all submissions successfully!',
            data: jsonSubs,
        });
    } catch (err: any) {
        next(
            new AppError({
                message: err.message || 'Server error occurred!',
                statusCode: err.statusCode || 400,
                stack: err.stack || '',
            })
        );
    }
};
