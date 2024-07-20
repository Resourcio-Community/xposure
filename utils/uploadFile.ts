import { imageRef } from '@/lib/firebase/storage';
import { UploadMetadata, getDownloadURL, uploadBytesResumable, getMetadata } from 'firebase/storage';

interface UploadedFile {
    metadata: string;
    url: string;
}

export async function upload(items: any, email: string) {
    const imageArr: UploadedFile[] = [];
    const promises = items.map((item: any) => {
        const metaData: UploadMetadata = { customMetadata: { name: item.label } };
        const fileName = new Date().getTime().toString();
        if (email) {
            const storageRef = imageRef(email, fileName);
            const uploadTask = uploadBytesResumable(storageRef, item.file, metaData);

            return new Promise<void>((resolve, reject) => {
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // console.log(progress);
                    },
                    (err) => {
                        console.log(err);
                        reject(err);
                    },
                    async () => {
                        try {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            const metaData = await getMetadata(uploadTask.snapshot.ref);
                            imageArr.push({
                                metadata: metaData.customMetadata?.name || "",
                                url: downloadURL
                            });
                            resolve();
                        } catch (err) {
                            reject(err);
                        }
                    }
                );
            });
        }
    });
    await Promise.all(promises);
    return imageArr;
};