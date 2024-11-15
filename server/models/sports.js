import mongoose from "mongoose";

const sportsSchema = new mongoose.Schema(
  {
    sportName: { type: String, required: true, default: '' },
    rules: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Sport", sportsSchema);