import { authOptions } from '@/app/lib/authOptions';
import dbConnect, { collectionNamesObj } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server";

export const DELETE = async (req, {params}) => {
 const bookinCollection = dbConnect(collectionNamesObj.bookingCollection);
  const p = await params;
 
  const query = {_id: new ObjectId(p.id)}

  //Validation
  const session = await getServerSession(authOptions);
  const currentBooking = await bookinCollection.findOne(query)

  //Deleting User Specific Booking

 
  const deleteResponse = await bookinCollection.deleteOne(query);

  return NextResponse(deleteResponse);

}

export const GET = async (req, {params}) => {
  const p = await params;

  const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);

  const data = await servicesCollection.findOne({
    _id: new ObjectId(p.id),
  });

  return NextResponse.json(data)
}