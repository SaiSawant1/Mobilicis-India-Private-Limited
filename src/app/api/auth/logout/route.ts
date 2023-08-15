import { NextRequest, NextResponse } from "next/server";

export function DELETE(req: NextRequest) {
    
    try {
        const response=NextResponse.json(
            {
                message:"logout completed"
            },{status:200}
        )

         response.cookies.set("token","",{
            httpOnly:true,expires:new Date(0)
        })
        return response
    } catch (error) {
        return NextResponse.json({ error: error });
    }


}