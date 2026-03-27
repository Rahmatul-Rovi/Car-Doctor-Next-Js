import dbConnect , {collectionNamesObj} from "@/app/lib/dbConnect";
import { NextResponse } from "next/server"

export const GET = async (req, {params})=>{

    const bookingCollection = dbConnect(collectionNamesObj.bookinCollection);
    return NextResponse.json({});
}