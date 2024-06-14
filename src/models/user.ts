import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "Please provide a name"] },
  email: { type: String, required: [true, "Please provide an email"] },
  password: { type: String, required: [true, "Please provide a password"] },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.models.posts || mongoose.model("users", userSchema);

export default User;
