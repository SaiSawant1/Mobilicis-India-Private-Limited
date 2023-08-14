import { connect } from "@/lib/dbConfig";
import { NextRequest, NextResponse } from "next/server";


connect();
export async function PATCH(request:NextRequest){
    try{
        const body = await request.json();
        console.log(body)
        return NextResponse.json({
            message:"success"
        })
    }catch(error){
        return NextResponse.json({
            message:error
        })
    }
} 