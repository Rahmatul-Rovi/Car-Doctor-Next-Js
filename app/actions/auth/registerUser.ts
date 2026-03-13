"use server";

import bycrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";

export const registerUser = async(payload) => {
     const userCollection = dbConnect(collectionNamesObj.userCollection);

     //validation
     const { email, password} = payload;
     if(!email || !password)  return {success: false};

     const user = await userCollection.findOne({email:payload.email});

     if(!user){
      const hashedPassword = await bycrypt.hash(password,10);
      payload.password = hashedPassword;
  const result = await userCollection.insertOne(payload);
  const {acknowledged, insertedId} = result;

     return {acknowledged, insertedId};
     }

     return {success: false};
   
}