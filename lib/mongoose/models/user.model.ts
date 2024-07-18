import mongoose, { Schema } from "mongoose";

const ImageReelSchema: Schema = new mongoose.Schema({
    url: {
        type: String,
        default: null,
        required: true
    },
    theme: {
        type: String,
        default: null,
        required: true
    }
})

const UserSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    images: [ImageReelSchema],
    reels: [ImageReelSchema],
    payments: [{
        type: String,
        default: null,
        required: true
    }]
},
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.createdAt
                delete ret.updatedAt
                delete ret.__v
            }
        },
        timestamps: true,
    }
);

UserSchema.index({ email: 1 })

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;