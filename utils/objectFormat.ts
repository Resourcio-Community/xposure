import { DBUser, ImageFormDataObject, ReelFormDataObject, ImageUploadFormat } from "@/types";

export function imageObjectFormat(data: ImageFormDataObject) {
  let imageArray: ImageUploadFormat[] = [];
  Object.values(data).map((item) => {
    const tempArr = Object.values(item);
    if (tempArr.some((elem) => elem !== null)) {
      imageArray.push({ label: item.section, file: item.image });
    }
  });
  return imageArray;
}

export function reelObjectFormat(data: ReelFormDataObject) {
  let reelArray: string[] = [];
  Object.values(data).map((item) => {
    const tempArr = Object.values(item);
    if (tempArr.some((elem) => elem !== null)) {
      reelArray.push(item.reel as string);
    }
  });
  return reelArray;
}


export function finalImageObjectFormat(
  data: ImageFormDataObject,
  name: string,
  email: string,
  photoURL: string,
  paymentID: string
) {
  let finalObject: DBUser = {
    name,
    email,
    photoURL,
    img_1: data.section1.url!,
    imgCategory_1: data.section1.category!,
    imgTheme_1: data.section1.theme!,
    img_2: data.section2.url!,
    imgCategory_2: data.section2.category!,
    imgTheme_2: data.section2.theme!,
    img_3: data.section3.url!,
    imgCategory_3: data.section3.category!,
    imgTheme_3: data.section3.theme!,
    reel_1: null!,
    reelCategory_1: null!,
    reelTheme_1: null!,
    reel_2: null!,
    reelCategory_2: null!,
    reelTheme_2: null!,
    txn: paymentID,
  }
  return finalObject;
}

export function finalReelObjectFormat(
  data: ReelFormDataObject,
  name: string,
  email: string,
  photoURL: string,
  paymentID: string
) {
  let finalObject: DBUser = {
    name,
    email,
    photoURL,
    img_1: null!,
    imgCategory_1: null!,
    imgTheme_1: null!,
    img_2: null!,
    imgCategory_2: null!,
    imgTheme_2: null!,
    img_3: null!,
    imgCategory_3: null!,
    imgTheme_3: null!,
    reel_1: data.section1.reel!,
    reelCategory_1: data.section1.category!,
    reelTheme_1: data.section1.theme!,
    reel_2: data.section2.reel!,
    reelCategory_2: data.section2.category!,
    reelTheme_2: data.section2.theme!,
    txn: paymentID,
  }
  return finalObject;
}
