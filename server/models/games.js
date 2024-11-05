import mongoose, { Schema } from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    player: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    event: {
      type: String
    },
    sportCategory: {
      type: String,
      default: 'NFL'
    },
    point: {
      type: Number,
    },
    selectedTeam: {//
      type: Number,
      default: 0
    },
    win: {//true: win, false: defeat
      type: Boolean,
      default: false
    },
    status: {//0: scheduled, 1: playing, 2: completed 
      type: Number, 
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Game", gameSchema);