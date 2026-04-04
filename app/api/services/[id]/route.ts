import { authOptions } from '@/app/lib/authOptions';
import dbConnect, { collectionNamesObj } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from "next/server"; // ✅ NextRequest যোগ

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);
  const p = await params;

  const query = { _id: new ObjectId(p.id) }

  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOk = session?.user?.email === currentBooking?.email; 

  if (isOwnerOk) {
    const deleteResponse = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings");
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json({ success: false, message: "Forbidden Action" }, { status: 401 });
  }
};

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const p = await params;

  const servicesCollection = await dbConnect(collectionNamesObj.servicesCollection); 

  const data = await servicesCollection.findOne({
    _id: new ObjectId(p.id),
  });

  return NextResponse.json(data);
};