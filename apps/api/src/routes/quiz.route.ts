import express from 'express';
import {
    createQuiz,
    getAllQuiz,
    getQuiz,
    submitQuiz,
    updateQuiz,
} from '../controllers/quiz.controller';
import {
    getReportByQuizId,
    getReports,
} from '../controllers/report.controller';
import validate from '../middleware/validate';
import {
    CreateQuizInputSchema,
    EditQuizInputSchema,
    SubmitQuizInputSchema,
} from '../types';

const router = express.Router();

router
    .route('/')
    .get(getAllQuiz)
    .post(validate(CreateQuizInputSchema), createQuiz);

router.route('/report').get(getReports);
router.route('/report/:id').get(getReportByQuizId);

// * NOTE: This should be at last as it catches other routes also.
router
    .route('/:id')
    .get(getQuiz)
    .put(validate(EditQuizInputSchema), updateQuiz);

router.route('/submit').post(validate(SubmitQuizInputSchema), submitQuiz);

export default router;
