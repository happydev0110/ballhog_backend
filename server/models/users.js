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
    },
    phoneNumber: {
      type: String,
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