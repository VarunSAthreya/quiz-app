import type { NextFunction, Request, Response } from 'express';
import AppError from '../helper/AppError';
import { Quiz, User } from '../models';

export const createQuiz = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { body } = req;
        const { username, email } = body;

        // Check if there is user details
        if (!username || !email) {
            throw new AppError({
                message: 'User details missing',
                statusCode: 400,
            });
        }

        // Get user
        let user = await User.findOne({ username });
        if (!user) {
            // If user isn't present the create new user with the given credentials
            user = new User({ username, email });
            await user.save();
        }

        // Set adminID
        body.adminID = user._id;

        const quiz = new Quiz(body);
        const savedQuiz = await quiz.save();

        res.status(201).json({
            message: 'Quiz Created Successfully!',
            data: savedQuiz.toJSON(),
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

export const getAllQuiz = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const quizzes = await Quiz.find({});
        const jsonQuiz = quizzes.map((quiz) => quiz.toJSON());

        res.status(201).json({
            message: 'Quiz Created Successfully!',
            data: jsonQuiz,
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
