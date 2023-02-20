import express from 'express';
import {
    getSubmissionById,
    getSubmissions,
} from '../controllers/submission.controller';

const router = express.Router();

router.route('/').get(getSubmissions);

router.route('/:id').get(getSubmissionById);

export default router;
