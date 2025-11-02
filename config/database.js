import mongoose from "mongoose";
import { MONGODB_URI } from "./app.js";

export const connectDb = () => {
  return mongoose.connect(MONGODB_URI, {
    dbName: "enhive",
  });
};
