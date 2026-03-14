"use server";

import dbConnect from "@/app/lib/dbConnect";

export const loginUser = async(payload) => {
    const {email, password} = payload;
    
    const userCollection = dbConnect(collectionNamesObj.userCollection);
    const user =  await userCollection.findOne({email})
    if(!user) return null;

    return user
}