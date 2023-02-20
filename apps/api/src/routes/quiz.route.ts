import express from 'express';
import { createQuiz, getAllQuiz } from '../controllers/quiz.controller';

const router = express.Router();

router.route('/').post(createQuiz).get(getAllQuiz);

export default router;
