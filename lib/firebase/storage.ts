import { app } from "./config";
import { getStorage, ref } from "firebase/storage";

const storage = getStorage(app);
const imageRef = (email: string, fileName: string) => ref(storage, `images/${email}/${fileName}`,);

export { imageRef }