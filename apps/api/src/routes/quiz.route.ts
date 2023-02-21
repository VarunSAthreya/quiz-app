import express from 'express';
import {
    createQuiz,
    getAllQuiz,
    getQUiz,
    submitQuiz,
} from '../controllers/quiz.controller';

const router = express.Router();

router.route('/').get(getAllQuiz).post(createQuiz);

router.route('/:id').get(getQUiz);

router.route('/submit').post(submitQuiz);

export default router;
