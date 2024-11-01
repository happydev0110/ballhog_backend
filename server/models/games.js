import mongoose, { Schema } from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    player: {
      type: Schema.ObjectId,
      ref: 'user'
    },
    event: {
      type: String
    },
    sportCategory: {
      type: String,
    },
    point: {
      type: Number,
    },
    selectedTeam:{
      type: Number,
    },
    win: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Game", gameSchema);