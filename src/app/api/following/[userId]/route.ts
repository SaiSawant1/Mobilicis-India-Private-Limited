import { connect } from "@/lib/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../models/userModel";



connect()


export async function GET(request: NextRequest,{params}:{params:{userId:string}}) {
    try {

        const {userId}=params

        const currentUser = await User.findById(userId).populate("followers");

        if (!currentUser) {
            return NextResponse.json({ error: "User not found" });
        }

        return NextResponse.json(currentUser.followers);

        
    } catch (error:any) {
        return NextResponse.json({ message: error.message });
    }

}