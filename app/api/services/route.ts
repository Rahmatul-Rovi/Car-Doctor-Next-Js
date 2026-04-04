import { authOptions } from "@/app/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"; 

export const GET = async (req: NextRequest) => { 
    const session = await getServerSession(authOptions);
    if(session){
       const email = session?.user?.email;
       const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection); 
       const result = await bookingCollection.find({userEmail: email}).toArray();
       return NextResponse.json(result);
    }
    return NextResponse.json([]);
}

export const POST = async (req: NextRequest) => { 
    const body = await req.json();
    const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection); 
    const result = await bookingCollection.insertOne(body);
    return NextResponse.json(result);
}