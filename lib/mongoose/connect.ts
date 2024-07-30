import mongoose from "mongoose";

const connection: { isConnected?: number } = {}

export async function ConnectDB() {

    mongoose.set('strictQuery', true);

    if (!process.env.NEXT_PUBLIC_MONGODB_URL) return console.log("Missing MongoDB URL");

    if (connection.isConnected) {
        console.log("MongoDB connection already established");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL as string);

        connection.isConnected = db.connections[0].readyState;
        console.log(`MongoDB : ${db.connection.host}`);
    }
    catch (error) {
        console.log(error);
    }
}
