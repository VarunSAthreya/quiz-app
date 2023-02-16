import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 32,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    { timestamps: true }
);

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// To ensure virtual fields are serialized.
UserSchema.set('toJSON', {
    virtuals: true,
});

export default mongoose.model('User', UserSchema);
