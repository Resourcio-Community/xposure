'use server'

import { ConnectDB } from "../mongoose/connect";
import User from "../mongoose/models/user.model";

export async function fetchUser(email: string) {
    try {
        await ConnectDB();

        return await User.findOne({ email });
    }
    catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}


interface Params {
    email: string,
    url_1: string,
    theme_1: string,
    url_2: string,
    theme_2: string,
    url_3: string,
    theme_3: string,
    reel: string,
    txn: string
}

export async function manipulateUser({ email, url_1, theme_1, url_2, theme_2, url_3, theme_3, reel, txn }: Params): Promise<void | string> {
    try {
        await ConnectDB();

        let temp
        let images = []
        if (url_1 && theme_1) {
            temp = { url: url_1, theme: theme_1 }
            images.push(temp)
        }

        if (url_2 && theme_2) {
            temp = { url: url_2, theme: theme_2 }
            images.push(temp)
        }

        if (url_3 && theme_3) {
            temp = { url: url_3, theme: theme_3 }
            images.push(temp)
        }


        const existingUser = await User.findOne({ email })

        if (!existingUser) {
            const details = {
                email,
                images,
                reel,
                payments: [txn]
            }

            return await User.create(details)
        }

        else {
            const user = await User.findOneAndUpdate(
                { email },
                { $push: { images } },
                { new: true }
            )
            console.log(user);
            return "User updated"
        }

    }
    catch (error: any) {
        throw new Error(`Failed to update user: ${error.message}`);
    }
}


export async function getImageCount(email: string) {
    try {
        await ConnectDB();

        const imageCount = await User.aggregate([
            { $match: { email } },
            { $project: { count: { $size: '$images' } } }
        ])

        return imageCount
    }
    catch (error: any) {
        throw new Error(error.message);
    }
}