import mongoose from 'mongoose';

const QuizSubmissionSchema = new mongoose.Schema(
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

export default mongoose.model('QuizSubmission', QuizSubmissionSchema);
