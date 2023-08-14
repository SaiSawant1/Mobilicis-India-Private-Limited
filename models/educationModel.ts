import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    userId : String,
    college : String,
    degree : String,
    startYear : String,
    endYear : String,
    description:String,
})

const Education = mongoose.models.education || mongoose.model("education",educationSchema);

export default Education
