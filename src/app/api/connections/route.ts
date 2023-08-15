import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/userModel";

export async function POST(request:NextRequest){
    try{
        const body=await request.json()
        const {currentUser,connectionId}:any=body

        const user1=await User.findById(currentUser)
        const user2=await User.findById(connectionId)

        if(user1){
            user1.followers.push(user2._id)
            await user1.save()
        }
        if(user2){
            user2.followers.push(user1._id)
            await user2.save()
        }
        return NextResponse.json({message:"success"})
    }catch(error){
        return NextResponse.json({error:error})
    }
} 



export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const { currentUser, connectionId }: any = body;

        const user1 = await User.findById(currentUser);
        const user2 = await User.findById(connectionId);

        if (user1) {
            user1.followers = user1.followers.filter((id:any) => id === connectionId);
            await user1.save();
        }
        if (user2) {
            user2.followers = user2.followers.filter((id:any) => id === currentUser);
            await user2.save();
        }
        return NextResponse.json({ message: "success" });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}