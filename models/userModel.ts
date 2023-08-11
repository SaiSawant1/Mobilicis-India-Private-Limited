import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  contact: Number,
  about: String,
  image: String,
  createAt: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
