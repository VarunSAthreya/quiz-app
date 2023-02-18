import mongoose from 'mongoose';

const QuizReportSchema = new mongoose.Schema(
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

QuizReportSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

QuizReportSchema.set('toJSON', {
    virtuals: true,
});

export default mongoose.model('QuizReport', QuizReportSchema);
