import { DBUser, FormDataObject, ImageUploadFormat } from "@/types";

export function imageObjectFormat(data: FormDataObject) {
  let imageArray: ImageUploadFormat[] = [];
  Object.values(data).map((item) => {
    const tempArr = Object.values(item);
    if (tempArr.some((elem) => elem !== null)) {
      imageArray.push({ label: item.section, file: item.image });
    }
  });
  return imageArray;
}

export function finalObjectFormat(
  data: FormDataObject,
  name: string,
  email: string,
  photoURL: string
) {
  let finalObject: DBUser = {
    name,
    email,
    photoURL,
    img_1: data.section1.url as string,
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
    txn: "ABCDEFGH",
  }
  return finalObject;
}
