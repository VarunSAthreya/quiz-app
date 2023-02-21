import express from 'express';
import {
    createQuiz,
    getAllQuiz,
    getQUiz,
    submitQuiz,
} from '../controllers/quiz.controller';
import { getReportById, getReports } from '../controllers/report.controller';

const router = express.Router();

router.route('/').get(getAllQuiz).post(createQuiz);

router.route('/report').get(getReports);
router.route('/report/:id').get(getReportById);

// * NOTE: This should be at last as it catches other routes also.
router.route('/:id').get(getQUiz);

router.route('/submit').post(submitQuiz);

export default router;
