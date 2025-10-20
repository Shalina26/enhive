import mongoose from "mongoose";

export const activitySchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  venue: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0, step: 1 },
});

export const Activity = mongoose.model("Activity", activitySchema);
