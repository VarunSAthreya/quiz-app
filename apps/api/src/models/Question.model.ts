import mongoose from 'mongoose';
import OptionSchema from './Option.model';

const QuestionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            min: 3,
            trim: true,
        },
        options: [OptionSchema],
        isMultiple: {
            type: Boolean,
            required: true,
        },
        points: {
            type: Number,
            default: 1,
        },
    },
    { timestamps: true }
);

export default QuestionSchema;
