import express from 'express';
import { getSubmissions } from '../controllers/submission.controller';

const router = express.Router();

router.route('/').get(getSubmissions);

export default router;
