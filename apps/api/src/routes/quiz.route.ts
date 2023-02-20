import express from 'express';
import {
    createQuiz,
    getAllQuiz,
    getQUiz,
    getReports,
} from '../controllers/quiz.controller';

const router = express.Router();

router.route('/').post(createQuiz).get(getAllQuiz);

router.route('/report').get(getReports);

router.route('/:id').get(getQUiz);

export default router;
