import express from 'express';
import {
    createQuiz,
    getAllQuiz,
    getQUiz,
} from '../controllers/quiz.controller';
import { getReports } from '../controllers/report.controller';

const router = express.Router();

router.route('/').post(createQuiz).get(getAllQuiz);

router.route('/report').get(getReports);

// * NOTE: This should be at last as it catches other routes also.
router.route('/:id').get(getQUiz);

export default router;
