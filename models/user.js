import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
