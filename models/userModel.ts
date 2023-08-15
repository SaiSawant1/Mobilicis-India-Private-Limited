import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contact: String,
  about: String,
  image: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    }
  ],
  createAt: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
