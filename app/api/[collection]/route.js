import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const GET = async (request, { params }) => {
    const client=await clientPromise
    const db=client.db("MooMarket")
    const data=await db
        .collection(params.collection)
        .find({})
        .toArray()
    return NextResponse.json(data)
}