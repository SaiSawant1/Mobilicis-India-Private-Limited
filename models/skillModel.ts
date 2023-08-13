import mongoose from "mongoose";

const skillSchema=new mongoose.Schema({
    userId:String,
    name:String,
})

const Skills=mongoose.models.skills||mongoose.model("skills",skillSchema);

export default Skills