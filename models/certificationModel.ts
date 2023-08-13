import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema({
    userId: String,
    name: String,
    grantedBy: String,
})

const Certifications=mongoose.models.certifications||mongoose.model("certifications",certificationSchema);
export default Certifications