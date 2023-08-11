import mongoose from "mongoose"

export const connect=()=>{
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection
        connection.on("connected",()=>{
            console.log("connected")
        })
        connection.on("error",()=>{
            console.log("error")
            process.exit();
        })

    }
    catch(e){
        console.log(e)
    }
}