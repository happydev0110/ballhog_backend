import mongoose, { Schema } from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    player: {
      type: Schema.ObjectId,
      required: true,
      unique: true,
      ref: 'user'
    },
    sportCategory: {
      type: String,
      require: true
    },
    point: {
      type: Number,
      require: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Game", gameSchema);