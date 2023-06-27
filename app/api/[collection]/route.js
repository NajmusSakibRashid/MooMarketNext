import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const GET=async (request,{params})=>{
    const client=await clientPromise
    const db=client.db("MooMarket")
    const bestDeal=await db
        .collection(params.collection)
        .find({})
        .sort({"id":1})
        .toArray()
    return NextResponse.json(bestDeal)
}