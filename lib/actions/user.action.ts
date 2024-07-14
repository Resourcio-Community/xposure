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

export async function manipulateUser({ email, url_1, theme_1, url_2, theme_2, url_3, theme_3, reel, txn }: Params): Promise<void> {
    try {
        await ConnectDB();
        
        const existingUser = await User.findOne({ email })

        if (!existingUser) {            
            const details = {
                email,
                image_1: {
                    url: url_1,
                    theme: theme_1
                },
                image_2: {
                    url: url_2,
                    theme: theme_2
                },
                image_3: {
                    url: url_3,
                    theme: theme_3
                },
                reel,
                payments: txn
            }

            const user = await User.create(details)

            return user
        }

    }
    catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}
