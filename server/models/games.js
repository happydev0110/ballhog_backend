import mongoose, { Schema } from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    player: {
      type: Schema.ObjectId,
      required: true,
      ref: 'user'
    },
    sportCategory: {
      type: String,
      require: true
    },
    point: {
      type: Number,
      require: true
    },
    selectedTeam:{
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Game", gameSchema);