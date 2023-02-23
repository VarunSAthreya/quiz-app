import express from 'express';
import {
    createQuiz,
    getAllQuiz,
    getQUiz,
    submitQuiz,
    updateQuiz,
} from '../controllers/quiz.controller';
import {
    getReportByQuizId,
    getReports,
} from '../controllers/report.controller';

const router = express.Router();

router.route('/').get(getAllQuiz).post(createQuiz);

router.route('/report').get(getReports);
router.route('/report/:id').get(getReportByQuizId);

// * NOTE: This should be at last as it catches other routes also.
router.route('/:id').get(getQUiz).put(updateQuiz);

router.route('/submit').post(submitQuiz);

export default router;
