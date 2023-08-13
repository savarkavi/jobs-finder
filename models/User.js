import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastname",
  },
  location: {
    type: String,
    default: "my city",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: String,
  avatarPublicId: String,
});

export default mongoose.model("User", UserSchema);
