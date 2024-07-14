import mongoose, { Schema } from "mongoose";

const ImageSchema: Schema = new mongoose.Schema({
    url: {
        type: String,
        default: null
    },
    theme: {
        type: String,
        default: null
    }
})

const UserSchema: Schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    image_1: ImageSchema,
    image_2: ImageSchema,
    image_3: ImageSchema,
    reel: {
        type: String,
        default: null
    },
    payments: {
        type: String,
        default: null
    }
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