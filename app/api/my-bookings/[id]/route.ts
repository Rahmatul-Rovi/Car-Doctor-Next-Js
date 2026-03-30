import dbConnect , {collectionNamesObj} from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

export const GET = async (req, {params})=>{

    const p = await params;
    const bookingCollection = dbConnect(collectionNamesObj.bookinCollection);
    const query = {_id: new ObjectId(p.id)};
    const singleBooking = await bookingCollection.findOne(query)
    return NextResponse.json(singleBooking);
}


export const PATCH = async (requestAnimationFrame, {params}) => {
      const p = await params;
    const bookingCollection = dbConnect(collectionNamesObj.bookinCollection);
    const query = {_id: new ObjectId(p.id)};

    const body = await req.json()
    const filter = {
        $set: ...body
    }
    const option = {
        upsert: true;
    }

    const updateResponse = await bookingCollection.updateOne(query, filter)
}