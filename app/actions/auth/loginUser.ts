"use server";

import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  try {
    // ১. ডাটাবেস কানেক্ট করা
    const db = await dbConnect();
    
    // ২. collectionNamesObj ব্যবহার করে কালেকশন ধরা
    const userCollection = db.collection(collectionNamesObj.userCollection);

    // ৩. ইউজার খোঁজা
    const user = await userCollection.findOne({ email });
    
    if (!user) {
      return null;
    }

    // ৪. পাসওয়ার্ড চেক (bcrypt.compare ব্যবহার করে)
    // সঠিক নিয়ম: (টাইপ করা পাসওয়ার্ড, ডাটাবেসের হ্যাশ পাসওয়ার্ড)
    const isPasswordOk = await bcrypt.compare(password, user.password);

    if (!isPasswordOk) {
      return null;
    }

    // সব ঠিক থাকলে ইউজার অবজেক্ট রিটার্ন (নিরাপত্তার জন্য পাসওয়ার্ড বাদ দিয়ে)
    const { password: userPass, ...userWithoutPass } = user;
    return userWithoutPass;

  } catch (error) {
    console.error("Login Error:", error);
    return null;
  }
};