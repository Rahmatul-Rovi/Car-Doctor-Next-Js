"use server";

import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload: any) => { 
   const { email, password } = payload;

  try {
    // ১১ নম্বর লাইনের খালি dbConnect() টা ডিলিট করে দিয়েছি
    // সরাসরি কালেকশনটা কানেক্ট করুন
    const userCollection = await dbConnect(collectionNamesObj.userCollection);

    // ৩. ইউজার খোঁজা
    const user = await userCollection.findOne({ email });
    
    if (!user) {
      return null;
    }

    // ৪. পাসওয়ার্ড চেক
    const isPasswordOk = await bcrypt.compare(password, user.password);

    if (!isPasswordOk) {
      return null;
    }

    // পাসওয়ার্ড বাদ দিয়ে ইউজার অবজেক্ট রিটার্ন
    const { password: userPass, ...userWithoutPass } = user;
    return userWithoutPass;

  } catch (error) {
    console.error("Login Error:", error);
    return null;
  }
};