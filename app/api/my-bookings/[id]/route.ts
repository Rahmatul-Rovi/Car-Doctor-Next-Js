import { authOptions } from "@/app/lib/authOptions";
import dbConnect , {collectionNamesObj} from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async (req, {params})=>{

    const p = await params;
    const bookingCollection = dbConnect(collectionNamesObj.bookinCollection);
    const query = {_id: new ObjectId(p.id)};
   
      const session = await getServerSession(authOptions)
   const email = session?.user?.email
  const singleBooking = await bookingCollection.findOne(query)
   const isOwnerOk = email === currentBookingData?.email;
   if(isOwnerOk){
       return NextResponse.json(singleBooking);

   }
    else{
        return NextResponse({message: "Forbidden GET  Action"}, {
            status: 403,
        })
    }

    }


export const PATCH = async (requestAnimationFrame, {params}) => {
      const p = await params;
    const bookingCollection = dbConnect(collectionNamesObj.bookinCollection);
    const query = {_id: new ObjectId(p.id)};

   const session = await getServerSession(authOptions)
   const email = session?.user?.email
   const currentBookingData = await bookingCollection.findOne(query)
   const isOwnerOk = email === currentBookingData?.email;


    if(isOwnerOk){
            const body = await req.json()
    const filter = {
        $set: {...body}
    }
    const option = {
        upsert: true,
    }

    const updateResponse = await bookingCollection.updateOne(query, filter, option)

    revalidatePath("/my-bookings")
    return NextResponse(updateResponse);
    }
    else{
        return NextResponse({message: "Forbidden Update Action"}, {
            status: 403,
        })
    }

}