import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: ''
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      default: ''
    },
    balance: {
      type: Number,
      required: true,
      default: 50
    },
    payment:{
      venmo: {
        type: String,
        unique: true,
        default: ''
      },
      paypal: {
        type: String,
        unique: true,
        default: ''
      },
      cashApp: {
        type: String,
        unique: true,
        default: ''
      },
      zelle: {
        type: String,
        unique: true,
        default: ''
      }
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);