import mongoose, { Schema } from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    player: {
      type: Schema.ObjectId,
      ref: 'user'
    },
    sportCategory: {
      type: String,
    },
    point: {
      type: Number,
    },
    selectedTeam:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Game", gameSchema);