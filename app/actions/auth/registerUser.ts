"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";

export const registerUser = async (payload: any) => {
    
    //Db Connection add
    const userCollection = await dbConnect(collectionNamesObj.userCollection);

    const { email, password } = payload;
    if (!email || !password) return { error: "Missing fields" };

    try {
        // Already User ok check
        const exists = await userCollection.findOne({ email });
        if (exists) return { error: "User already exists" };

        // Password Hash
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // New Password Create
        const newUser = { ...payload, password: hashedPassword };
        
        const result = await userCollection.insertOne(newUser);
        return { success: true, id: result.insertedId.toString() };
        
    } catch (error) {
        console.error("Registration Error:", error);
        return { error: "Something went wrong" };
    }
}