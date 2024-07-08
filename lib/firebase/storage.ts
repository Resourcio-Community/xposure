import { getStorage, ref } from "firebase/storage";

const storage = getStorage();
const imageRef = (email: string) => ref(storage, `images/${email}`);

export { imageRef }