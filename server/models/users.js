import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: '' },
    email: { type: String }, // Removed unique constraint
    promoCode: { type: String }, 
    password: { type: String },
    phoneNumber: { type: String, default: '123-456-7890' }, // Removed unique constraint
    balance: { type: Number, required: true, default: 0 },
    creditLimit: { type: Number, required: true, default: 50 },
    payment: {
      venmo: { type: String, default: '' },
      paypal: { type: String, default: '' },
      cashApp: { type: String, default: '' },
      zelle: { type: String, default: '' }
    }
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);