"use server";

import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload: any) => { 
   const { email, password } = payload;

  try {
  
    //Database Connect
    const userCollection = await dbConnect(collectionNamesObj.userCollection);

    // User Check
    const user = await userCollection.findOne({ email });
    
    if (!user) {
      return null;
    }

    // Password Check
    const isPasswordOk = await bcrypt.compare(password, user.password);

    if (!isPasswordOk) {
      return null;
    }

    // User Object return
    const { password: userPass, ...userWithoutPass } = user;
    return userWithoutPass;

  } catch (error) {
    console.error("Login Error:", error);
    return null;
  }
};