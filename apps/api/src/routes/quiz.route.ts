import express from 'express';
import { createQuiz } from '../controllers/quiz.controller';

const router = express.Router();

router.route('/').post(createQuiz);

export default router;
