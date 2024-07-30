import { imageRef } from '@/lib/firebase/storage';
import { ImageUploadFormat } from '@/types';
import { UploadMetadata, getDownloadURL, uploadBytes, getMetadata } from 'firebase/storage';

interface UploadedFile {
    metadata: string;
    url: string;
}

export async function upload(items: ImageUploadFormat[], email: string) {
    const imageArr: UploadedFile[] = [];
    const promises = items.map((item) => {
        const metaData: UploadMetadata = { customMetadata: { name: item.label! } };
        const fileName = new Date().getTime().toString() + '_' + item.file?.name;

        if (email) {
            const storageRef = imageRef(email, fileName);
            const uploadTask = uploadBytes(storageRef, item.file!, metaData);

            return new Promise<void>((resolve, reject) => {
                uploadTask.then(async (snapshot) => {
                    // console.log(snapshot)
                    try {
                        const downloadURL = await getDownloadURL(storageRef);
                        const metadata = await getMetadata(storageRef);

                        imageArr.push({
                            metadata: metadata.customMetadata?.name || "",
                            url: downloadURL
                        });
                        resolve();
                    } catch (err) {
                        reject(err);
                    }
                },
                    (err) => {
                        console.log(err);
                        reject(err);
                    },
                );
            });
        }
    });
    await Promise.all(promises);
    return imageArr;
};