"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";

export const registerUser = async (payload) => {
    // dbConnect কে অবশ্যই await করতে হবে
    const db = await dbConnect(); 
    const userCollection = db.collection(collectionNamesObj.userCollection);

    const { email, password } = payload;
    if (!email || !password) return { error: "Missing fields" };

    // ইউজার অলরেডি আছে কি না চেক
    const exists = await userCollection.findOne({ email });
    if (exists) return { error: "User already exists" };

    try {
        // Password Hash
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { ...payload, password: hashedPassword };
        
        const result = await userCollection.insertOne(newUser);
        return { success: true, id: result.insertedId.toString() };
    } catch (error) {
        return { error: "Something went wrong" };
    }
}