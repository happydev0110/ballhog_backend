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
    teams: {
      type: Array
    },
    entryPoint: {
      type: Number,
      default: 0
    },
    gameDate: {
      type: Date,
      default: new Date()
    },
    winPoint: {
      type: Number,
      default: 0
    },
    payout: {//-1: free game, 0: 1v4, 1: 1v1 
      type: Number,
      default: -1
    },
    selectedTeam: {//
      type: Number,
      default: 0
    },
    startPos: {//
      type: Number,
      default: 0
    },
    win: {//1: win, 0: defeat, -1: not sure
      type: Number,
      default: -1
    },
    status: {//0: scheduled, 1: pending, 2: completed 
      type: Number,
      default: 1
    },
    createdLink: {
      type: String,
      default: "https://www.playballhog.com/playGames"
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Game", gameSchema);