import dbConnect, { collectionNamesObj } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from "next/server";

export const DELETE = async (req, {params}) => {
  const p = await params;
  const bookinCollection = dbConnect(collectionNamesObj.bookingCollection);
  const query = {_id: new ObjectId(p.id)}
  const deleteResponse = await bookinCollection.deleteOne(query);

}

export const GET = async (req, {params}) => {
  const p = await params;

  const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);

  const data = await servicesCollection.findOne({
    _id: new ObjectId(p.id),
  });

  return NextResponse.json(data)
}