import { connect } from "@/lib/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest) {
    try {
        const body=await request.json()

        console.log(body)


    } catch (error) {
        return NextResponse.json({ error: error });
    }
}