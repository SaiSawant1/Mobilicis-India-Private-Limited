import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    userId:String,
    duration:String,
    startDateEndDate:String,
    designation:String,
    role:String,
    employer:String,
})

const Experiences=mongoose.models.experiences||mongoose.model("experiences",experienceSchema);
export default Experiences