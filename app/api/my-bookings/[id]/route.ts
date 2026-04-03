import { authOptions } from "@/app/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth"; // এটি ইম্পোর্ট করতে হবে
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// ১. GET মেথড ঠিক করা
export const GET = async (req: any, { params }: any) => {
    const p = await params;
    // বানান ঠিক করা হয়েছে: bookingCollection (আগে ছিল bookinCollection)
    const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const singleBooking = await bookingCollection.findOne(query);

    // currentBookingData ভেরিয়েবলটি এখানে singleBooking হবে
    const isOwnerOk = email === singleBooking?.email;

    if (isOwnerOk) {
        return NextResponse.json(singleBooking);
    } else {
        return NextResponse.json({ message: "Forbidden GET Action" }, { status: 403 });
    }
};

// ২. PATCH মেথড ঠিক করা
export const PATCH = async (req: any, { params }: any) => {
    const p = await params;
    const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const currentBookingData = await bookingCollection.findOne(query);
    const isOwnerOk = email === currentBookingData?.email;

    if (isOwnerOk) {
        const body = await req.json(); // এখানে req ব্যবহার করা হয়েছে
        const filter = {
            $set: { ...body }
        };
        const option = {
            upsert: true,
        };

        const updateResponse = await bookingCollection.updateOne(query, filter, option);

        revalidatePath("/my-bookings");
        return NextResponse.json(updateResponse); // NextResponse.json ব্যবহার করুন
    } else {
        return NextResponse.json({ message: "Forbidden Update Action" }, { status: 403 });
    }
};