import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  whatsapp: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  constituency: { type: String, required: true },
  voterId: { type: String, required: true, unique: true },
});

// Collection name will be `jcmitwing`
export default mongoose.models.User || mongoose.model("User", UserSchema, "jcmitwing");
