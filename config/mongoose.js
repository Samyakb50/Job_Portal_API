import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(`mongodb://127.0.0.1:27017/job-portal`);
    console.log(`connected to mongoDb`);
  } catch (error) {
    console.log(`MongoDB Error`);
  }
};
export default connectDB;