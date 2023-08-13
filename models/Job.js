import mongoose from "mongoose";
const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "done", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "full-time",
    },
    location: {
      type: String,
      default: "my city",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("job", JobSchema);
