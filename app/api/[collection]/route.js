import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const GET = async (request, { params }) => {
    // const client=await clientPromise
    // const db=client.db("MooMarket")
    // const data=await db
    //     .collection(params.collection)
    //     .find({})
    //     .sort({"id":1})
    //     .toArray()
    return NextResponse.json([
        {
            id: 0,
            specifications: [
                "specification 1"
            ],
            image: 'cow1.jpg',
            title: 'Cow'
        },
        {
            id: 0,
            specifications: [
                "specification 1"
            ],
            image: 'cow1.jpg',
            title: 'Cow'
        },
        {
            id: 0,
            specifications: [
                "specification 1"
            ],
            image: 'cow1.jpg',
            title: 'Cow'
        },
        {
            id: 0,
            specifications: [
                "specification 1"
            ],
            image: 'cow1.jpg',
            title: 'Cow'
        }
    ])
}