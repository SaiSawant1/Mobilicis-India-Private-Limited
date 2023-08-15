import { connect } from "@/lib/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../models/userModel";


connect()
export async function POST(req: NextRequest) {

    try {
        const body= await  req.json();

        const {name,email,image,about,contact,_id}=body

        if(!name || !email || !image || !about || !contact ){
            return NextResponse.json({
                message: "Please fill all the fields"
            })
        }

        const user=await User.findByIdAndUpdate(_id,{name,email,image,about,contact})

        await user.save();

        return NextResponse.json({
            message: "Success",
            user: user
        },{status: 200})
        
    } catch (error) {
        console.log(error)
    }





}