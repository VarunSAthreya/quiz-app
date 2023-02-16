import mongoose from 'mongoose';
import QuestionSchema from './Question.model';

const QuizSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            min: 5,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            min: 5,
            trim: true,
        },
        adminID: {
            type: String,
            required: true,
        },
        questions: [QuestionSchema],
        totalPoints: {
            type: Number,
            // * NOTE: REQUIRED NOT TRUE AS WE ARE CALCULATING THE TOTAL POINTS BEFORE SAVING
            // required: true,
        },
    },
    { timestamps: true }
);

// * Pre function calculates the total points using question
QuizSchema.pre('save', function (this, next) {
    this.totalPoints = this.questions.reduce(
        (accumulator, currentObject) => accumulator + currentObject.points,
        0
    );

    return next();
});

QuizSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

QuizSchema.set('toJSON', {
    virtuals: true,
});

export default mongoose.model('Quiz', QuizSchema);