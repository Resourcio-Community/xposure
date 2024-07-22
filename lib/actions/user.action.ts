"use server";
import { cache } from 'react'
import { DBUser, ILeaderBoard, ImageReelCount, UserFetched } from "@/types";
import { ConnectDB } from "../mongoose/connect";
import User from "../mongoose/models/user.model";

export const fetchUser = cache(async (email: string): Promise<UserFetched | null> => {
  try {
    await ConnectDB();

    const user = await User.findOne({ email }, { _id: 0, payments: 0 });
    return JSON.parse(JSON.stringify(user));
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
})

interface ImageReel {
  url: string;
  category: string;
  theme: string;
}

function validateImageObject(
  url: string,
  category: string,
  theme: string,
  data: Array<ImageReel>
) {
  let temp: ImageReel;
  if (url && category && theme) {
    temp = { url, category, theme };
    data.push(temp);
    return data;
  }
  return data;
}

function validateReelObject(
  url: string,
  category: string,
  theme: string,
  data: Array<ImageReel>
) {
  let temp: ImageReel;
  if (url && category && theme) {
    if (url.includes("youtube")) {
      const tempArr = url.split("/");
      const shortsID = tempArr.pop();
      url = `https://www.youtube.com/embed/${shortsID}`;
    }
    temp = { url, category, theme };
    data.push(temp);
    return data;
  }
  return data;
}

export async function manipulateUser({
  name,
  photoURL,
  email,
  img_1,
  imgCategory_1,
  imgTheme_1,
  img_2,
  imgCategory_2,
  imgTheme_2,
  img_3,
  imgCategory_3,
  imgTheme_3,
  reel_1,
  reelCategory_1,
  reelTheme_1,
  reel_2,
  reelCategory_2,
  reelTheme_2,
  txn,
}: DBUser): Promise<string> {
  let images: ImageReel[] = [],
    reels: ImageReel[] = [],
    payments = [];

  validateImageObject(img_1, imgCategory_1, imgTheme_1, images);
  validateImageObject(img_2, imgCategory_2, imgTheme_2, images);
  validateImageObject(img_3, imgCategory_3, imgTheme_3, images);
  validateReelObject(reel_1, reelCategory_1, reelTheme_1, reels);
  validateReelObject(reel_2, reelCategory_2, reelTheme_2, reels);

  if (txn) payments.push(txn);

  try {
    await ConnectDB();

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const details = { name, photoURL, email, images, reels, payments };

      const user = await User.create(details);

      console.log(user);
      return "User Created";
    } else {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { $push: { images, reels, payments } },
        { new: true }
      );

      console.log(updatedUser);
      return "User Updated";
    }
  } catch (error: any) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}

export async function getImageReelCountForAnUser(
  email: string
): Promise<Array<ImageReelCount> | []> {
  try {
    await ConnectDB();

    const imageReel = await User.aggregate([
      { $match: { email } },
      {
        $project: {
          _id: 0,
          email: 1,
          imageCount: { $size: "$images" },
          reelCount: { $size: "$reels" },
        },
      },
    ]);

    return imageReel;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const getLeaderboard = cache(async (): Promise<Array<ILeaderBoard> | []> => {
  try {
    await ConnectDB();

    const leaderboardData = await User.aggregate([
      {
        $project: {
          _id: 0,
          name: 1,
          photoURL: 1,
          imageCount: { $size: "$images" },
          reelCount: { $size: "$reels" },
        },
      },
    ]);
    return leaderboardData;
  } catch (error: any) {
    throw new Error(error.message);
  }
})
