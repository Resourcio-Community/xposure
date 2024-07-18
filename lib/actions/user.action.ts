'use server'
import { DBUser, ILeaderBoard, ImageReelCount, UserFetched } from "@/types";
import { ConnectDB } from "../mongoose/connect";
import User from "../mongoose/models/user.model";


export async function fetchUser(email: string): Promise<UserFetched | null> {
    try {
        await ConnectDB();

        const user = await User.findOne({ email }, { _id: 0, payments: 0 });
        return JSON.parse(JSON.stringify(user))
    }
    catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}


export async function manipulateUser({ name, photoURL, email, img_1, imgTheme_1, img_2, imgTheme_2, img_3, imgTheme_3, reel_1, reelTheme_1, reel_2, reelTheme_2, txn }: DBUser): Promise<string> {

    let temp, images = [], reels = [], payments = []

    if (img_1 && imgTheme_1) {
        temp = { url: img_1, theme: imgTheme_1 }
        images.push(temp)
    }

    if (img_2 && imgTheme_2) {
        temp = { url: img_2, theme: imgTheme_2 }
        images.push(temp)
    }

    if (img_3 && imgTheme_3) {
        temp = { url: img_3, theme: imgTheme_3 }
        images.push(temp)
    }

    if (reel_1 && reelTheme_1) {
        temp = { url: reel_1, theme: reelTheme_1 }
        reels.push(temp)
    }

    if (reel_2 && reelTheme_2) {
        temp = { url: reel_2, theme: reelTheme_2 }
        reels.push(temp)
    }

    if (txn) payments.push(txn)

    try {
        await ConnectDB();

        const existingUser = await User.findOne({ email })

        if (!existingUser) {
            const details = { name, photoURL, email, images, reels, payments }

            const user = await User.create(details)

            console.log(user)
            return "User Created"
        }

        else {
            const updatedUser = await User.findOneAndUpdate(
                { email },
                { $push: { images, reels, payments } },
                { new: true }
            )

            console.log(updatedUser)
            return "User Updated"
        }

    }
    catch (error: any) {
        throw new Error(`Failed to update user: ${error.message}`);
    }
}


export async function getImageReelCountForAnUser(email: string): Promise<Array<ImageReelCount> | []> {
    try {
        await ConnectDB();

        const imageReel = await User.aggregate([
            { $match: { email } },
            {
                $project: {
                    _id: 0,
                    email: 1,
                    imageCount: { $size: '$images' },
                    reelCount: { $size: '$reels' }
                }
            },
        ])

        return imageReel
    }
    catch (error: any) {
        throw new Error(error.message);
    }
}


export async function getLeaderboard(): Promise<Array<ILeaderBoard> | []> {
    try {
        await ConnectDB();

        const leaderboardData = await User.aggregate([
            {
                $project: {
                    _id: 0,
                    name: 1,
                    photoURL: 1,
                    imageCount: { $size: '$images' },
                    reelCount: { $size: '$reels' }
                }
            },
        ])
        return leaderboardData
    }
    catch (error: any) {
        throw new Error(error.message)
    }

}