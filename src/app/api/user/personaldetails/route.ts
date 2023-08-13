import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    try {
        const body= await  req.json();

        console.log(body);
        
    } catch (error) {
        console.log(error)
    }





}