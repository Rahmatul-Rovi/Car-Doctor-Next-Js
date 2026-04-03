import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
    servicesCollection: "services",
    userCollection: "user",
    bookingCollection: "user_booking",
}

export default function dbConnect(collectionName: string) {

    const uri = process.env.MONGODB_URI!;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName);
}