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

        res.status(200).json({
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

export const getSubmissionById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            params: { id },
        } = req;

        if (!id) {
            throw new AppError({
                message: 'Please provide the Submission ID!',
                statusCode: 401,
            });
        }

        const sub = await QuizSubmission.findById(id);

        if (!sub) {
            throw new AppError({
                message: 'Invalid ID, Cannot get the requested submission.',
                statusCode: 401,
            });
        }

        res.status(200).json({
            message: 'Fetched submission Successfully!',
            data: sub.toJSON(),
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
