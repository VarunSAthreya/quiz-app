import type { NextFunction, Request, Response } from 'express';
import AppError from '../helper/AppError';
import calculateScore from '../helper/calculateScore';
import { Quiz, QuizReport, QuizSubmission, User } from '../models';

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

        const jsonQuiz: any[] = [];
        for (const quiz of quizzes) {
            const json = quiz.toJSON();
            const report = await QuizReport.findOne({ quizID: quiz._id });
            const result: any = { ...json };

            if (!report) {
                result.quizTaken = 0;
                result.avgScore = 0;
            } else {
                result.quizTaken = report.quizTaken;
                result.avgScore = report?.avgScore;
            }

            jsonQuiz.push(result);
        }

        res.status(200).json({
            message: 'Fetched quizzes Successfully!',
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

export const getQUiz = async (
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
                message: 'Please provide the Quiz ID!',
                statusCode: 401,
            });
        }

        const quiz = await Quiz.findById(id);

        if (!quiz) {
            throw new AppError({
                message: 'Invalid ID, Cannot get the requested quiz.',
                statusCode: 401,
            });
        }

        res.status(200).json({
            message: 'Fetched quiz Successfully!',
            data: quiz.toJSON(),
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

export const submitQuiz = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            body: { quiz: submittedQuiz, username, email },
        } = req;
        const { id } = submittedQuiz;

        if (!username || !email) {
            throw new AppError({
                message: 'Please provide user details.',
                statusCode: 401,
            });
        }

        if (!submittedQuiz || !id) {
            throw new AppError({
                message: 'Please provide the quiz details for submission.',
                statusCode: 401,
            });
        }

        let user = await User.findOne({ username });
        if (!user) {
            user = new User({ username, email });
            await user.save();
        }

        const quiz = await Quiz.findById(id);
        if (!quiz) {
            throw new AppError({
                message:
                    'Error! Cannot retrieve given quiz, or quiz not present.',
                statusCode: 401,
            });
        }

        const score = calculateScore(quiz, submittedQuiz);

        const quizSubmission = new QuizSubmission({
            quizID: quiz._id,
            userID: user._id,
            score: score,
        });
        await quizSubmission.save();

        let quizReport = await QuizReport.findOne({ quizID: quiz._id });

        if (!quizReport) {
            let quizReport = await new QuizReport({
                quizID: quiz._id,
                quizTaken: 1,
                avgScore: score,
            });

            await quizReport.save();
        } else {
            // Calculate new average score
            const avg =
                (quizReport.quizTaken * quizReport.avgScore + score) /
                (quizReport.quizTaken + 1);

            await QuizReport.findOneAndUpdate(
                { _id: quizReport._id },
                {
                    quizTaken: quizReport.quizTaken + 1,
                    avgScore: avg,
                }
            );
        }

        res.status(201).json({
            message: 'Quiz Submitted Successfully!!',
            data: {
                score,
                totalPoints: quiz.totalPoints,
            },
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
