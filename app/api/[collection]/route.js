import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const GET = async (request, { params }) => {
    const client = await clientPromise
    const db = client.db("MooMarket")
    const data = await db
        .collection(params.collection)
        .find({})
        .toArray()
    return NextResponse.json(data)
}

// export const POST = async (request, { params }) => {
//     const categories=['Grass Feed Cattle','Cross Breed Cattle','Exotic Breeds']
//     const client=await clientPromise
//     const db=client.db("MooMarket")
//     let i=0;
//     db.collection(params.collection)
//         .updateMany({},{
//             '$set':{
//                 'farm':2,
//                 'category':categories[(i++)%3]
//             }
//         })
// }