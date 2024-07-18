import mongoose, { Schema } from "mongoose";

function imageLimit(val: Array<Object>) {
    return val.length <= 3;
}

function reelLimit(val: Array<Object>) {
    return val.length <= 2;
}

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
    images: {
        type: [ImageReelSchema],
        validate: [imageLimit, '{PATH} exceeds the limit of 3']
    },
    reels: {
        type: [ImageReelSchema],
        validate: [reelLimit, '{PATH} exceeds the limit of 2']
    },
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