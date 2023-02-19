import express from 'express';
import { createQuiz, getQUiz } from '../controllers/quiz.controller';

const router = express.Router();

router.route('/').post(createQuiz);

router.route('/:id').get(getQUiz);

export default router;
