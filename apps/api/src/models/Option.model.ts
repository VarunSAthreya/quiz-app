import mongoose from 'mongoose';

const OptionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            min: 3,
            trim: true,
        },
        isAnswer: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

OptionSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

OptionSchema.set('toJSON', {
    virtuals: true,
});

export default OptionSchema;
