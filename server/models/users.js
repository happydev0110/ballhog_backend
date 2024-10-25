import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    balance: {
      type: Number,
      required: true,
      default: 50
    },
    payment:{
      venmo: {
        type: String,
        default: ''
      },
      paypal: {
        type: String,
        default: ''
      },
      cashApp: {
        type: String,
        default: ''
      },
      zelle: {
        type: String,
        default: ''
      }
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);