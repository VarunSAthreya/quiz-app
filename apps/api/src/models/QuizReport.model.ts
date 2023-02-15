import mongoose from 'mongoose';

const quizReportSchema = new mongoose.Schema(
    {
        quizID: {
            type: String,
            required: true,
            unique: true,
        },
        quizTaken: {
            type: Number,
            required: true,
        },
        avgScore: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const QuizReport = mongoose.model('QuizReport', quizReportSchema);
export default QuizReport;
