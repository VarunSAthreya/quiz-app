import { NextFunction, Request, Response } from 'express';
import AppError from '../helper/AppError';
import { QuizReport } from '../models';

export const getReports = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const reports = await QuizReport.find();
        const jsonReports = reports.map((report) => report.toJSON());

        res.status(201).json({
            message: 'Fetched quiz reports Successfully!',
            data: jsonReports,
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

export const getReportById = async (
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
                message: 'Please provide the Report ID!',
                statusCode: 401,
            });
        }

        const report = await QuizReport.findById(id);

        if (!report) {
            throw new AppError({
                message: 'Invalid ID, Cannot get the requested report.',
                statusCode: 401,
            });
        }

        res.status(201).json({
            message: 'Fetched report Successfully!',
            data: report.toJSON(),
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
