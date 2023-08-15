import { connect } from "@/lib/dbConfig";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../models/userModel";

connect();
export async function GET(request: NextRequest,{params}:{params:{userId:string}}) {
    try {
       
        const {userId}=params
       
        const currentUser = await User.findById(userId);

        if (!currentUser) {
            return NextResponse.json({ error: "User not found" });
        }

        // Find users who don't follow the currentUser
        const nonFollowers = await User.find({
            _id: {
                $ne: new mongoose.Types.ObjectId(userId) // Exclude the currentUser
            },
            followers: {
                $nin: [new mongoose.Types.ObjectId(userId)] // Not in the followers array
            }
        });

        // Return the list of non-followers
        return NextResponse.json(nonFollowers);

    } catch (error) {
        return NextResponse.json({ error: error });
    }
}