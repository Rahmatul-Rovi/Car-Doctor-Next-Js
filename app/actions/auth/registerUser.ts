"use server";

import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";

export const registerUser = async(payload) => {
     const userCollection = dbConnect(collectionNamesObj.userCollection);
     const result = await userCollection.insertOne(payload);
     return result;
}