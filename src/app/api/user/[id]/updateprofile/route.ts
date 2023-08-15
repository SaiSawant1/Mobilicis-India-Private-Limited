import { connect } from "@/lib/dbConfig";

import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../../models/userModel";


connect();
export async function PATCH(request:NextRequest){
    try{
        const body = await request.json();
        const {name,email,image,about,contact,_id} = body

        const user = await User.findByIdAndUpdate(_id,{name,email,image,about,contact})

        return NextResponse.json({
            user
        })
    }catch(error){
        return NextResponse.json({
            message:error
        })
    }
} 