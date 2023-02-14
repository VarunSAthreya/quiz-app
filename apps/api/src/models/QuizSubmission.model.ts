import mongoose from 'mongoose';

const quizSubmissionSchema = new mongoose.Schema(
    {
        quizID: {
            type: String,
            required: true,
        },
        userID: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const QuizSubmission = mongoose.model('QuizSubmission', quizSubmissionSchema);
export default QuizSubmission;
