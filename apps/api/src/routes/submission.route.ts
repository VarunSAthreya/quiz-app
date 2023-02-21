import express from 'express';
import {
    getSubmissionById,
    getSubmissionByQuizID,
    getSubmissionByUserID,
    getSubmissions,
} from '../controllers/submission.controller';

const router = express.Router();

router.route('/').get(getSubmissions);

router.route('/:id').get(getSubmissionById);

router.route('/quiz/:id').get(getSubmissionByQuizID);
router.route('/user/:id').get(getSubmissionByUserID);

export default router;
